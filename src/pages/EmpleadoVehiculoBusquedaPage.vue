<template>
  <div>
    <NavBarEmpleadoVue/>
    <h1>Buscar vehículo por Marca</h1>
    <section>
      <div class="container">
        <FloatLabel>
          <InputText id="marca" v-model="marcaid" @keydown.enter="consultarPorMarca"/>
          <label for="marca">Marca</label>
        </FloatLabel>
        <Button @click="consultarPorMarca" severity="danger" raised label="Buscar" />

        <div v-if="mensajeVacio">
          <p>No existen coincidencias</p>
        </div>

        <div v-if="mostrar">
          <table class="tabla">
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
                  <Button @click="goVisualizar(vehiculo.placa)" severity="Plain" plain text raised label="Visualizar" />
                  <Button @click="goActualizar(vehiculo.id)" severity="secondary" text raised label="Actualizar" />
                  <Button @click="confirmarEliminarVehiculo(vehiculo)" icon="pi pi-trash" severity="danger" text raised />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Dialog para confirmación de eliminación -->
        <Dialog v-model="mostrarDialogEliminar" :visible="mostrarDialogEliminar" header="Eliminar Vehículo" :modal="true" @update:visible="ocultarDialogEliminar">
          <p>¿Está seguro de eliminar este vehículo?</p>
          <div class="p-d-flex p-jc-between">
            <Button @click="cancelarEliminar" label="Cancelar" />
            <Button @click="eliminarVehiculo" label="Eliminar" class="p-button-danger" />
          </div>
        </Dialog>
        
        <!-- Dialog para mensaje de vehículo eliminado -->
        <Dialog v-model="mostrarDialogEliminado" :visible="mostrarDialogEliminado" header="Vehículo Eliminado" :modal="true" @update:visible="ocultarDialogEliminado">
          <p>El vehículo ha sido eliminado correctamente.</p>
        </Dialog>
      </div>
    </section>
  </div>
</template>

<script>
import {
  consultarEmpleadoVehiculoFachada,
  eliminarEmpleadoVehiculoFachada,
} from "../helpers/clienteEmpleado.js";

import MensajeTemp from "../components/MensajeTemp.vue";
import FloatLabel from 'primevue/floatlabel';

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue';
import Dialog from 'primevue/dialog';

export default {
  name: "EmpleadoVehiculoBusquedaPage",
  components: {
    MensajeTemp, FloatLabel,
    Button, InputText, NavBarEmpleadoVue, Dialog
  },
  data() {
    return {
      marcaid: null,
      data: [],
      mostrar: false,
      mensajeVacio: false,
      mostrarDialogEliminar: false,
      mostrarDialogEliminado: false,
      vehiculoAEliminar: null,
    };
  },
  methods: {
    async consultarPorMarca() {
      this.data = await consultarEmpleadoVehiculoFachada(this.marcaid);
      this.mostrar = this.data.length > 0;
      this.mensajeVacio = this.data.length === 0;
    },
    goVisualizar(placa) {
      this.$router.push({ name: "VisualizarVehiculo", params: { placa } });
    },
    goActualizar(id) {
      this.$router.push({ name: "ActualizarVehiculo", params: { id } });
    },
    confirmarEliminarVehiculo(vehiculo) {
      this.vehiculoAEliminar = vehiculo;
      this.mostrarDialogEliminar = true;
    },
    async eliminarVehiculo() {
      await eliminarEmpleadoVehiculoFachada(this.vehiculoAEliminar.id);
      this.mostrarDialogEliminar = false;
      this.mostrarDialogEliminado = true;
      setTimeout(() => {
        this.mostrarDialogEliminado = false;
        this.consultarPorMarca();
      }, 2000);
    },
    cancelarEliminar() {
      this.mostrarDialogEliminar = false;
    },
    ocultarDialogEliminar() {
      this.mostrarDialogEliminar = false;
    },
    ocultarDialogEliminado() {
      this.mostrarDialogEliminado = false;
    },
  },
};
</script>

<style scoped>
.tabla {
  margin-top: 20px;
}
</style>
