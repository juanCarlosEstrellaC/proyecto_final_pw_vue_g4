<template>
<NavBarEmpleadoVue/>
<h1>Buscar vehículo por Marca</h1>
<section>

  <div class="container">
  
<FloatLabel>
  
        <InputText id="marca" v-model="marcaid" @keydown.enter="consultarPorMarca"/>
        <label for="marca">Marca</label>
      </FloatLabel>
      <Button @click="consultarPorMarca" severity="danger" raised  label="Buscar" />

 

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

            <Button @click="goVisualizar(vehiculo.placa)" severity="Plain" plain text raised label="Visualizar" />
              
              <Button @click="goActulizar(vehiculo.id)"  severity="secondary" text raised   label="Actualizar" />
<Button @click="goEliminar(vehiculo.id, vehiculo.placa)" icon="pi pi-trash" severity="danger" text raised/>

            
           
            
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
  </div>
</section>
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
export default {
  name: "EmpleadoVehiculoBusquedaPage",
  components: {
    MensajeTemp, FloatLabel,
    Button,InputText,NavBarEmpleadoVue
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