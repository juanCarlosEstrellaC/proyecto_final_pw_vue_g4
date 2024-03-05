<template>

  <section>
    <div class="container">
 
    <div class="contenedor">
<FloatLabel>
        <InputText id="placa" v-model="placa" />
        <label for="placa">Placa</label>
        </FloatLabel>
        <FloatLabel>
        <InputText id="cedula" v-model="cedula" />
        <label for="cedula">Cédula</label>
        </FloatLabel>

 <label  class="label" for="fechaInicio">Fecha Inicio</label>
        <InputText id="fechaInicio" v-model="fechaInicio" type="date" :min="fechaMinima"/>

         <label  class="label" for="fechaFin">Fecha Fin</label>
        <InputText id="fechaFin" v-model="fechaFin" type="date" :min="fechaMinima " />

   
 <Button @click="presionarBoton" severity="danger" raised  label="Verificar Disponibilidad" />
      
    </div>

    <div class="mensajes" v-if="imprimirMenjajes">
      <div>
        <div v-if="vehiculoDisponible" class="mensajeOk">
          <h3>Vehículo Disponible</h3>
          <h5>Es posible rentar el vehículo</h5>
          <h4>El valor total a pagar es:</h4>
          <h3>$ {{ valorTotal }}</h3>

           <FloatLabel>
        <InputText id="tarjeta" type="number" v-model="tarjeta" />
        <label for="tarjeta">Ingrese su Número Tarjeta de Crédito</label>
        </FloatLabel>
         

  <Button @click="reservar" severity="danger" raised  label="Reservar" />
          
        </div>
        <div v-else class="mensajeBad">
          <h3>Vehículo No Disponible</h3>
          <h5>No es posible rentar el vehículo en las fechas solicitadas.</h5>
          <h3>El vehículo se encontrará disponible desde el</h3>
          <h2>{{ fechaDisponibilidad }}</h2>
          <h5>Por favor, cambie las fechas e intente nuevamente.</h5>

          <Button @click="cambiarFechas" severity="danger" raised  label="Cambiar fechas" />
          
        </div>
      </div>
    </div>
  

  <div ref="pdfContent" v-else class="reservaCorrecta">
    <h1>Vehículo Reservado con éxito</h1>
    <h2>Estimado usuario, se ha generado el número de reserva:</h2>
    <h2>{{ numeroReserva }}</h2>

    <h4>Para el vehículo:</h4>
    <p>
      <span><strong>Marca:</strong> {{ marca }}</span
      ><br />
      <span><strong>Modelo:</strong> {{ modelo }}</span
      ><br />
      <span><strong>Placa:</strong> {{ placa }}</span>
    </p>
    <h4>El periodo de vigencia de la renta es:</h4>
    <p>
      <span><strong>Fecha de Inicio:</strong> {{ fechaInicio }}</span
      ><br />
      <span><strong>Fecha de Fin:</strong> {{ fechaFin }}</span>
    </p>
  </div>
    <div class="botonesReserva">
    <Button  v-if="generacion" @click="regresarPaginaPrincipal" severity="danger" raised  label="Aceptar" />
      <Button v-if="generacion" @click="generarPDF" severity="danger" raised  label="Imprimir reserva" />
</div>
  
  </div>
  </section>
</template>

<script>
import html2pdf from "html2pdf.js";

import {
  consultarClientePorCIFachada,
  consultarValorTotalFachada,
  guardarRentaFachada,
  consultarReservaPorPlacaFachada
} from "@/helpers/clienteCliente";
import FloatLabel from 'primevue/floatlabel';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';


import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import router from "@/router/router";
import NavBarInicioVue from '@/components/NavBarInicio.vue';
export default {
  components:{
    InputText,FloatLabel
    ,Button,NavBarInicioVue
  },
  props:{
    valor:{
        type: String,
        required:true
    }
  },
  data() {
    
    return {
      placa: this.$route.query.placa,
      cedula: null,
      fechaInicio: null,
      fechaFin: null,
      estado: this.$route.query.estado,
      marca: this.$route.query.marca,
      modelo: this.$route.query.modelo,
      imprimirMenjajes: false,
      vehiculoDisponible: false,
      reservaRealizada: false,
      tarjeta: null,
      valorTotal: 100,
      numeroReserva: null,
      fechaDisponibilidad: null,
      formulario: false,
      fechaMinima: this.getFechaMinima(),
      generacion: false,
    };
  },
  methods: {
    regresarPaginaPrincipal() {
      this.$emit("envioReserva",this.numeroReserva)  
      router.push("/renta");
    },
    async presionarBoton() {
      if (!this.placa || !this.cedula || !this.fechaInicio || !this.fechaFin) {
        alert(
          "Por favor, completa todos los campos antes de verificar la disponibilidad."
        );
      } else if (this.fechaFin < this.fechaInicio) {
        alert(
          "¡Error de fecha!\n\n¿Intentando viajar en el tiempo?\nLa fecha de fin no puede ser anterior a la fecha de inicio.\nCambia las fechas para rentar un vehículo"
        );
        this.cambiarFechas();
      } else {
        await this.buscarCedula();

        if (this.formulario) {
          if (this.estado === "Disponible") {
            this.vehiculoDisponible = true;
            const cotizacion = {
              placa: this.placa,
              fechaInicio: this.fechaInicio,
              fechaFin: this.fechaFin,
            };
            this.valorTotal = await consultarValorTotalFachada(cotizacion);
          } else {
            this.vehiculoDisponible = false;

            const res = await consultarReservaPorPlacaFachada(this.placa);
            console.log(res);
            this.fechaDisponibilidad = res.fechaFin;
          }
          this.imprimirMenjajes = true;
        } else {
          alert(
            "Se produjo un error al buscar la cédula. Por favor, ingrese una cédula válida."
          );
        }
      }
    },
    async buscarCedula() {
      try {
        const c = await consultarClientePorCIFachada(this.cedula);
        console.log(c);
        if (c !== null) {
          this.formulario = true;
        } else {
          this.formulario = false;
          alert("Cédula no encontrada, por favor inténtelo de nuevo.");
        }
      } catch (error) {
        alert(
          "Se produjo un error al buscar la cédula. Por favor, ingrese una cédula válida."
        );
      }
    },
    cambiarFechas() {
      this.fechaInicio = null;
      this.fechaFin = null;
      this.imprimirMenjajes = false;
    },
    async reservar() {
      const renta = {
        placa: this.placa,
        cedula: this.cedula,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        tarjeta: this.tarjeta,
      };

   
      const reserva = await guardarRentaFachada(renta);
      console.log(reserva);
      console.log(reserva.numeroReserva);
      this.numeroReserva = reserva.numeroReserva;
      this.reservaRealizada = true;
      this.generacion = true;
    },
    getFechaMinima() {
      const hoy = new Date();
      const mes =
        hoy.getMonth() + 1 < 10 ? `0${hoy.getMonth() + 1}` : hoy.getMonth() + 1;
      const dia = hoy.getDate() < 10 ? `0${hoy.getDate()}` : hoy.getDate();
      return `${hoy.getFullYear()}-${mes}-${dia}`;
    },
    generarPDF() {
      const content = this.$refs.pdfContent;

      html2pdf(content);
    },
  },
};
</script>

<style scoped>

</style>