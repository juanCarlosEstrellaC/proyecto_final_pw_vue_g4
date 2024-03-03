<template>
  <h1>Buscar vehículo por Marca</h1>
  <input type="text" name="" id="" v-model="marcaid" />
  <button @click="consultarPorMarca">Buscar</button>

  <div v-if="mensajeVacio">
    <label for="">no existe coincidencias</label>
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
            <button @click="goEliminar(vehiculo.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  consultarEmpleadoVehiculoFachada,
  eliminarEmpleadoVehiculoFachada,
} from "../helpers/clienteEmpleado.js";

export default {
  name: "EmpleadoVehiculoBusquedaPage",
  data() {
    return {
      marcaid: null,
      data: [],
      mostrar: false,
      mensajeVacio: false,
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
    async goEliminar(id) {
      await eliminarEmpleadoVehiculoFachada(id);
      setTimeout(() => {
        this.consultarPorMarca(this.marcaid);
      }, 200);
      console.log("se elimino");
    },
  },
};
</script>

<style>
</style>