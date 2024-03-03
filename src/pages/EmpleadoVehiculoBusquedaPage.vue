<template>
  <h1>Buscar vehículo por Marca</h1>
  <input type="text" name="" id="" v-model="marcaid" />
  <button @click="consultarPorMarca">Buscar</button>

  <div v-if="mensajeVacio">
    <MensajeTemp
      titulo="NO EXISTEN COINCIDENCIAS"
      informacion="verifica la marca"
    />
  </div>

  <div v-if="mostrar">
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehiculo in data" :key="vehiculo.id">
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td>{{ vehiculo.placa }}</td>
          <td>
            <button @click="goVisualizar(vehiculo.placa)">Visualizar</button>
            <button @click="goActulizar(vehiculo.id)">Actualizar</button>
            <button @click="goEliminar(vehiculo.id, vehiculo.placa)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-if="mostrarEliminacion">
    <MensajeTemp
      titulo="Eliminado de la base"
      :informacion="'Se eliminó el vehículo con placa ' + valPlaca"
    />
  </div>
</template>

<script>
import {
  consultarEmpleadoVehiculoFachada,
  eliminarEmpleadoVehiculoFachada,
} from "../helpers/clienteEmpleado.js";

import MensajeTemp from "../components/MensajeTemp.vue";

export default {
  name: "EmpleadoVehiculoBusquedaPage",
  components: {
    MensajeTemp,
  },
  data() {
    return {
      marcaid: null,
      data: [],
      mostrar: false,
      mensajeVacio: false,
      mostrarMensaje: false,
      mostrarEliminacion: false,
      valPlaca: null,
    };
  },
  methods: {
    async consultarPorMarca() {
      this.data = await consultarEmpleadoVehiculoFachada(this.marcaid);
      if (this.data.length != 0) {
        this.mostrar = true;
        console.log("consulat desde em,todo");
        console.log(this.data);
        return this.data;
      }
      this.mostrar = false;
      this.mensajeVacio = true;
      setTimeout(() => {
        this.mensajeVacio = false;
      }, 3000);
    },
    //debe ir el id del vehiculo como argumento para relizar la busqueda de Vehiculo completo en el path
    goVisualizar(placa) {
      this.$router.push({ name: "VisualizarVehiculo", params: { placa } });
    },
    //debe ir el id del vehiculo como argumento para relizar la actualizacion en el path
    goActulizar(id) {
      this.$router.push({ name: "ActualizarVehiculo", params: { id } });
    },
    //solo debe mostrar mensaje si se eliminó o no el vehículo
    async goEliminar(id, placa) {
      await eliminarEmpleadoVehiculoFachada(id);
      this.valPlaca = placa;
      console.log(placa);
      this.mostrarEliminacion = true;
      setTimeout(() => {
        this.mostrarEliminacion = false;
        this.consultarPorMarca(this.marcaid);
      }, 3000);
      console.log("se elimino");
    },
  },
};
</script>

<style>
</style>