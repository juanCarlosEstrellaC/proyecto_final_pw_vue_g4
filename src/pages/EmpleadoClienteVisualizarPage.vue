<template>
  <h1>Visualziar toda la info de cliente</h1>

  <div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Cedula</th>
          <th>Fecha Nacimiento</th>
          <th>Genero</th>
          <th>Registro</th>
        </tr>
      </thead>
      <tbody>
        <td>{{ nombre }}</td>
        <td>{{ apellido }}</td>
        <td>{{ cedula }}</td>
        <td>{{ fNacimiento }}</td>
        <td>{{ genero }}</td>
        <td>{{ registro }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarEmpleadoClienteCedulaFachada } from "../helpers/clienteEmpleado.js";

export default {
  name: "EmpleadoClienteVisualizarPage",

  created() {
    this.visualizar(this.$route.params.cedula);
  },
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fNacimiento: null,
      genero: null,
      registro: null,
    };
  },
  methods: {
    async visualizar(id) {
      const data = await consultarEmpleadoClienteCedulaFachada(id);
      console.log(data);
      this.cedula = data.numeroCedula;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fNacimiento = data.fechaNacimiento;
      this.genero = data.genero;
      this.registro = data.registro;
      console.log("se cargo al inicio");
      
      console.log(data.numeroCedula);
      
    },
  },
};
</script>

<style>
</style>