<template>
  <h1>Visualziar toda la info de cliente</h1>

  <div>
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Año Fabricación</th>
          <th>País Fabricación</th>
          <th>Cilindraje</th>
          <th>Avaluo</th>
          <th>Valor</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <td>{{ valMarca }}</td>
        <td>{{ valModelo }}</td>
        <td>{{ valPlaca }}</td>
        <td>{{ valAnioFabricacion }}</td>
        <td>{{ valPfabricacion }}</td>
        <td>{{ valCilindraje }}</td>
        <td>{{ valAvaluo }}</td>
        <td>{{ valRenta }}</td>
        <td>{{ valEstado }}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarEmpleadoVehiculoPlacaFachada } from "../helpers/clienteEmpleado.js";

export default {
  name: "EmpleadoVehiculoVisualizarPage",

  created() {
    this.visualizar(this.$route.params.placa);
  },
  data() {
    return {
      valPlaca: null,
      valModelo: null,
      valMarca: null,
      valAnioFabricacion: null,
      valPfabricacion: null,
      valCilindraje: null,
      valAvaluo: null,
      valRenta: null,
      valEstado: null
    };
  },
  methods: {
    async visualizar(id) {
      const data = await consultarEmpleadoVehiculoPlacaFachada(id);
      console.log(data);
      this.valPlaca = data.placa;
      this.valMarca = data.marca;
      this.valAnioFabricacion = data.anioFabricacion;
      this.valPfabricacion = data.paisFabricacion;
      this.valCilindraje = data.cilindraje;
      this.valAvaluo = data.avaluo;
      this.valRenta = data.renta;
      this.valEstado = data.estado;
      console.log("se cargo al inicio");
      
      console.log(data.numeroCedula);
      
    },
  },
};
</script>

<style>
</style>