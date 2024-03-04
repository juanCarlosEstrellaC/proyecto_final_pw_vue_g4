<template>
  <div>
    <h1>Buscar cliente por Apellido</h1>
    <input type="text" v-model="apellidoid" @keydown.enter="consultarPorApellido"/>
    <button @click="consultarPorApellido">Buscar</button>

    <div v-if="mensajeVacio">
      <label for="">no existe coincidencias</label>
    </div>

    <div v-if="mostrar">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cedula</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in data" :key="cliente.id">
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.apellido }}</td>
            <td>{{ cliente.numeroCedula }}</td>
            <td>
              <button @click="goVisualizar(cliente.numeroCedula)">
                Visualizar
              </button>
              <button @click="goActualizar(cliente.id)">Actualizar</button>
              <button @click="goEliminar(cliente.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <button @click="goPdf()">Eliminar</button>
</template>

<script>
import {
  consultarEmpleadoClienteFachada,
  eliminarEmpleadoClienteFachada,
} from "../helpers/clienteEmpleado.js";

export default {
  name: "EmpleadoClienteBusquedaPage",
  data() {
    return {
      apellidoid: null,
      data: [],
      mostrar: false,
      mensajeVacio: false,
    };
  },
  methods: {
    async consultarPorApellido(event) {
    
        this.data = await consultarEmpleadoClienteFachada(this.apellidoid);

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

    // Redirige a la ruta de visualización con la cedula del cliente
    goVisualizar(cedula) {
      this.$router.push({ name: "VisualizarCliente", params: { cedula } });
    },
    // Redirige a la ruta de actualización con el ID del cliente
    goActualizar(id) {
      this.$router.push({ name: "ActualizarCliente", params: { id } });
    },

    goPdf() {
      this.$router.push('/generarpdf');
    },
    // Redirige a la ruta de eliminación con el ID del cliente
    async goEliminar(id) {
      await eliminarEmpleadoClienteFachada(id);
      setTimeout(() => {
        this.consultarPorApellido(this.apellidoid);
      }, 200);
      console.log("se elimino");
    },
  },
};
</script>

<style>
</style>
