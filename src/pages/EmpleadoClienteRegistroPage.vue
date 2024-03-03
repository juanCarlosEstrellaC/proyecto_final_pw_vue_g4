<template>
  <h1>Registro cliente por parte de Empelado</h1>

  <div>
    <FormularioGenerico
      type="text"
      etiqueta="Cédula"
      placeholder="0987654321"
      v-model="cedula"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Nombre"
      placeholder="Juan"
      v-model="nombre"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Apellido"
      placeholder="Montes"
      v-model="apellido"
    />
    <FormularioGenerico
      type="date"
      etiqueta="Fecha nacimiento"
      placeholder="12/12/2018"
      v-model="fNacimiento"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Genero"
      placeholder="F ó M"
      v-model="genero"
    />

    <label> Registro por parte del empleado</label>
  </div>

  <div>
    <button @click="insertar">Ingreso</button>
  </div>
</template>

<script>
import FormularioGenerico from "../components/FormularioGenerico.vue";

import { insertarEmpleadoClienteFachada } from "../helpers/clienteEmpleado.js";

export default {
  name: "EmpleadoClienteRegistroPage",
  components: {
    FormularioGenerico,
  },
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fNacimiento: null,
      genero: null,
    };
  },
  methods: {
    async insertar() {
      const clienteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fNacimiento,
        numeroCedula: this.cedula,
      };

      await insertarEmpleadoClienteFachada(clienteBody);
      this.nombre = null;
      this.apellido = null;
      this.genero = null;
      this.fNacimiento = null;
      this.cedula = null;
    },
    
  },
};
</script>

<style>
</style>