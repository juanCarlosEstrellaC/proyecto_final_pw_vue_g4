<template>
  <div v-if="!reservaRealizada">
    <div class="contenedor">
      <label for="">Placa:</label>
      <input type="text" v-model="placa" />
      <label for="">Cédula:</label>
      <input type="text" v-model="cedula" />
      <label for="fechaInicio">Fecha Inicio:</label>
      <input
        type="date"
        id="fechaInicio"
        v-model="fechaInicio"
        :min="fechaMinima"
      />
      <label for="">Fecha Fin:</label>
      <input type="date" v-model="fechaFin" :min="fechaMinima" />

      <button @click="presionarBoton">Verificar Disponibilidad</button>
    </div>

    <div class="mensajes" v-if="imprimirMenjajes">
      <div>
        <div v-if="vehiculoDisponible" class="mensajeOk">
          <h3>Vehículo Disponible</h3>
          <h5>Es posible rentar el vehículo</h5>
          <h4>El valor total a pagar es:</h4>
          <h2>$ {{ valorTotal }}</h2>
          <label for="">Ingrese su Número Tarjeta de Crédito:</label>
          <input type="number" v-model="tarjeta" />
          <button @click="reservar">Reservar</button>
        </div>
        <div v-else class="mensajeBad">
          <h3>Vehículo No Disponible</h3>
          <h5>No es posible rentar el vehículo en las fechas solicitadas.</h5>
          <h3>El vehículo se encontrará disponible desde el</h3>
          <h2>{{ fechaDisponibilidad }}</h2>
          <h5>Por favor, cambie las fechas e intente nuevamente.</h5>
          <button @click="cambiarFechas">Cambiar fechas</button>
        </div>
      </div>
    </div>
  </div>

  <div ref="pdfContent" v-else class="reservaCorrecta">
    <h1>Vehículo Reservado con éxito</h1>
    <h3>Estimado usuario, se ha generado el número de reserva:</h3>
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
  <button  v-if="generacion" @click="regresarPaginaPrincipal">Aceptar</button>
  <button v-if="generacion" @click="generarPDF">Generar PDF</button>
</template>

<script>
import html2pdf from "html2pdf.js";
import {
  consultarClientePorCIFachada,
  consultarValorTotalFachada,
  guardarRentaFachada,
} from "@/helpers/clienteCliente";
import router from "@/router/router";
export default {
  data() {
    return {
      placa: this.$route.query.placa,
      cedula: "",
      fechaInicio: "",
      fechaFin: "",
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

      guardarRentaFachada(renta);
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
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  width: 300px;
  background-color: rgb(241, 222, 198);
  border: solid 1px black;
}

.mensajeOk {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  background-color: rgb(138, 224, 95);
  border: solid 1px black;
}
.mensajeBad {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  background-color: rgb(224, 149, 95);
  border: solid 1px black;
}

.reservaCorrecta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  width: 40%;
  background-color: rgb(101, 224, 95);
  border: solid 1px black;
}

.mensajeOk label,
input,
button {
  margin-bottom: 30px;
}
button {
  margin: 30px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}

label {
  margin-top: 10px;
}

input {
  margin: 5px;
  text-align: center;
}
</style>