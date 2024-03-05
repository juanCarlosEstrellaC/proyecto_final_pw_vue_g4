<template>
  <div>
    <NavBarEmpleadoVue/>
    <h1>Buscar cliente por Apellido</h1>
    <section>
      <div class="container">
        <FloatLabel>
          <InputText id="apellido" v-model="apellidoid" @keydown.enter="consultarPorApellido"/>
          <label for="apellido">Apellido</label>
        </FloatLabel>
        <div class="boton">
          <Button @click="consultarPorApellido" severity="danger" raised label="Buscar" />
        </div>

        <div v-if="mensajeVacio">
          <p for="">No existen coincidencias</p>
        </div>

        <div v-if="mostrar">
          <table class="tabla">
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
                  <Button @click="goVisualizar(cliente.numeroCedula)" severity="Plain" plain text raised label="Visualizar" />
                  <Button @click="goActualizar(cliente.id)" severity="secondary" text raised label="Actualizar" />
                  <Button @click="confirmarEliminarCliente(cliente)" icon="pi pi-trash" severity="danger" text raised />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Dialog para confirmación de eliminación -->
        <Dialog v-model="mostrarDialogEliminar" :visible="mostrarDialogEliminar" header="Eliminar Cliente" :modal="true" @update:visible="ocultarDialogEliminar">
          <p>¿Está seguro de eliminar este cliente?</p>
          <div class="p-d-flex p-jc-between">
            <Button @click="cancelarEliminar" label="Cancelar" />
            <Button @click="eliminarCliente" label="Eliminar" class="p-button-danger" />
          </div>
        </Dialog>
        
        <!-- Dialog para mensaje de cliente eliminado -->
        <Dialog v-model="mostrarDialogEliminado" :visible="mostrarDialogEliminado" header="Cliente Eliminado" :modal="true" @update:visible="ocultarDialogEliminado">
          <p>El cliente ha sido eliminado correctamente.</p>
        </Dialog>
      </div>
    </section>
  </div>
</template>

<script>
import {
  consultarEmpleadoClienteFachada,
  eliminarEmpleadoClienteFachada,
} from "../helpers/clienteEmpleado.js";
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';

export default {
  components:{
    FloatLabel, InputText, Button, NavBarEmpleadoVue, Column, DataTable, Dialog
  },
  name: "EmpleadoClienteBusquedaPage",
  data() {
    return {
      apellidoid: null,
      data: [],
      mostrar: false,
      mensajeVacio: false,
      mostrarDialogEliminar: false,
      mostrarDialogEliminado: false,
      clienteAEliminar: null
    };
  },
  methods: {
    async consultarPorApellido(event) {
      this.data = await consultarEmpleadoClienteFachada(this.apellidoid);
      if (this.data.length != 0) {
        this.mostrar = true;
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

    // Mostrar dialog para eliminar cliente
    confirmarEliminarCliente(cliente) {
      this.clienteAEliminar = cliente;
      this.mostrarDialogEliminar = true;
    },

    // Confirmar eliminación del cliente
    async eliminarCliente() {
      await eliminarEmpleadoClienteFachada(this.clienteAEliminar.id);
      this.mostrarDialogEliminar = false;
      this.mostrarDialogEliminado = true;
      setTimeout(() => {
        this.mostrarDialogEliminado = false;
        this.consultarPorApellido();
      }, 2000);
    },

    // Cancelar eliminación del cliente
    cancelarEliminar() {
      this.mostrarDialogEliminar = false;
    },

    // Ocultar dialog de eliminación
    ocultarDialogEliminar() {
      this.mostrarDialogEliminar = false;
    },

    // Ocultar dialog de cliente eliminado
    ocultarDialogEliminado() {
      this.mostrarDialogEliminado = false;
    },
  },
};
</script>

<style>
.tabla {
  margin-top: 20px;
}
</style>
