<template>

<NavBarEmpleadoVue/>
<h1>Buscar cliente por Apellido</h1>
<section>
  <div class="container">
 
    
  
    <FloatLabel>
        <InputText id="apellido" v-model="apellidoid" @keydown.enter="consultarPorApellido"/>
        <label for="apellido">Apellido</label>
        </FloatLabel>
<div class="boton">
<Button @click="consultarPorApellido" severity="danger" raised  label="Buscar" />
    </div>

    <div v-if="mensajeVacio">
      <label for="">no existe coincidencias</label>
    </div>

    <div v-if="mostrar">
      <DataTable class="tabla">
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
              
              <Button @click="goActualizar(cliente.id)"  severity="secondary" text raised   label="Actualizar" />
<Button @click="goEliminar(cliente.id)" icon="pi pi-trash" severity="danger" text raised />

              
            </td>
          </tr>
        </tbody>
      </DataTable>
      
    </div>
   
  </div>

  </section>

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
export default {
  components:{
FloatLabel,InputText,Button,NavBarEmpleadoVue
  }
  ,
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