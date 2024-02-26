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
            No Es posible rentar el vehículo en las fechas solicitadas. Por
            favor, ingrese nuevas fechas.
          </h5>
          <button @click="cambiarFechas">Cambiar fechas</button>
        </div>
      </div>
      
    </div>
  </div>

  <div v-else>
    <h1>Vehículo Reservado con éxito</h1>
    <button @click="regresarPaginaPrincipal">Aceptar</button>
  </div>

</template>

<script>
import router from "@/router/router";
export default {
  data() {
    return {
      placa: this.$route.query.placa,
      cedula: this.cedula,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
      imprimirMenjajes: false,
      vehiculoDisponible: true,
      reservaRealizada: false,
    };
  },
  methods: {
    regresarPaginaPrincipal() {
      router.push("/clientes");
    },
    presionarBoton(){
      this.imprimirMenjajes = true;
    },
    cambiarFechas(){
      this.fechaInicio = null;
      this.fechaFin = null;
      this.imprimirMenjajes = false;
    },
    reservar(){
      this.reservaRealizada = true;
    }
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px auto;
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

button {
  margin: 10px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}
</style>