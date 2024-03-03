<template>
  <div v-if="!reservaRealizada">
    <div class="contenedor">
      <label for="">Placa:</label>
      <input type="text" v-model="placa" />
      <label for="">Cédula:</label>
      <input type="text" v-model="cedula" />
      <label for="">Fecha Inicio:</label>
      <input type="date" v-model="fechaInicio" />
      <label for="">Fecha Fin:</label>
      <input type="date" v-model="fechaFin" />

      <button @click="presionarBoton">Rentar</button>
    </div>

    <div class="mensajes" v-if="imprimirMenjajes">
      <div>
        <div v-if="vehiculoDisponible" class="mensajeOk">
          <h3>Vehículo Disponible</h3>
          <h5>Es posible rentar el vehículo</h5>
          <label for="">Ingrese su Número Tarjeta de Crédito:</label>
          <input type="number" v-model="tarjeta" />
          <button @click="reservar">Reservar</button>
        </div>
        <div v-else class="mensajeBad">
          <h3>Vehículo No Disponible</h3>
          <h5>
            No es posible rentar el vehículo en las fechas solicitadas. Por
            favor, ingrese nuevas fechas.
          </h5>
          <button @click="cambiarFechas">Cambiar fechas</button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="reservaCorrecta">
  <h1>Vehículo Reservado con éxito</h1>
  <h3>Estimado usuario</h3>

  <h4>Usted reservó el vehículo:</h4>
  <p>
    <span><strong>Marca:</strong> {{ marca }}</span><br>
    <span><strong>Modelo:</strong> {{ modelo }}</span><br>
    <span><strong>Placa:</strong> {{ placa }}</span>
  </p>
  
  <h4>El periodo de vigencia de la renta es:</h4>
  <p>
    <span><strong>Fecha de Inicio:</strong> {{ fechaInicio }}</span><br>
    <span><strong>Fecha de Fin:</strong> {{ fechaFin }}</span>
  </p>



  <button @click="regresarPaginaPrincipal">Aceptar</button>
</div>



</template>

<script>
import { guardarRentaFachada } from "@/helpers/clienteCliente";
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
    };
  },
  methods: {
    regresarPaginaPrincipal() {
      router.push("/renta");
    },
    presionarBoton() {
      if (!this.placa || !this.cedula || !this.fechaInicio || !this.fechaFin) {
        alert(
          "Por favor, completa todos los campos antes de realizar la renta."
        );
      } else if (this.fechaFin < this.fechaInicio) {
        alert(
          "¡Error de fecha!\n\n¿Intentando viajar en el tiempo?\nLa fecha de fin no puede ser anterior a la fecha de inicio.\nCambia las fechas para rentar un vehículo"
        );
        this.cambiarFechas();
      } else {
        if (this.estado === "Disponible") {
          this.vehiculoDisponible = true;
        } else {
          this.vehiculoDisponible = false;
        }
        this.imprimirMenjajes = true;

        // console.log("Placa:", this.placa);
        // console.log("Cédula:", this.cedula);
        // console.log("Fecha de Inicio:", this.fechaInicio);
        // console.log("Fecha de Fin:", this.fechaFin);
        // console.log("Estado:", this.estado);
        // console.log("Marca:", this.marca);
        // console.log("Modelo:", this.modelo);
       }
    },
    cambiarFechas() {
      this.fechaInicio = null;
      this.fechaFin = null;
      this.imprimirMenjajes = false;
    },
    reservar() {
      const renta = {
        placa: this.placa,
        cedula: this.cedula,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        tarjeta: this.tarjeta,
      };

      //guardarRentaFachada(renta);
      this.reservaRealizada = true;
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

.reservaCorrecta{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  width: 40%;
  background-color: rgb(101, 224, 95);
  border: solid 1px black;
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