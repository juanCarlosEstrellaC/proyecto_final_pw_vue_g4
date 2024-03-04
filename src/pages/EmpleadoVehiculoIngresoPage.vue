<template>
  <h1>Ingresar Vehículo</h1>

  <!-- <FormularioVehiculo :txtBtn="Btn" />  -->

  <div>
    <FormularioGenerico
      type="text"
      etiqueta="Placa"
      placeholder="ABC-01234"
      v-model="placa"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Modelo"
      placeholder="A4"
      v-model="modelo"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Marca"
      placeholder="BMW"
      v-model="marca"
    />
    <FormularioGenerico
      type="date"
      etiqueta="Año Fabricación"
      placeholder="12/12/2018"
      v-model="anio"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Pais Fabricaión"
      placeholder="Mexico"
      v-model="pFabricacion"
    />

    <FormularioGenerico
      type="number"
      etiqueta="Cilindraje"
      placeholder="BMW"
      v-model="cilindraje"
    />

    <FormularioGenerico
      type="number"
      etiqueta="Avalúo"
      placeholder="18000.."
      v-model="avaluo"
    />

    <FormularioGenerico
      type="number"
      etiqueta="Valor por día"
      placeholder="BMW"
      v-model="valDia"
    />

    <button @click="ingreso">Ingreso</button>
  </div>
</template>


<script>
import FormularioVehiculoFer from "../components/FormularioVehiculoFer.vue";
import FormularioGenerico from "../components/FormularioGenerico.vue";

import {insertarEmpleadoVehiculoFachada} from "../helpers/clienteEmpleado.js";

export default {
  name: "EmpleadoVehiculoIngresoPage",
  components: {
    FormularioVehiculoFer,
    FormularioGenerico,
  },
  data() {
    return {
      Btn: "Guardar",

      placa: null,
      modelo: null,
      marca: null,
      anio: null,
      pFabricacion: null,
      cilindraje: null,
      avaluo: null,
      valDia: null,
    };
  },
  methods: {
    async ingreso() {
      const vehiculoBody = {
        placa: this.placa,
        modelo: this.modelo,
        marca: this.marca,
        anioFabricacion: this.anio,
        paisFabricacion: this.pFabricacion,
        cilindraje: this.cilindraje,
        avaluo: this.avaluo,
        renta: this.valDia,
      };

      await insertarEmpleadoVehiculoFachada(vehiculoBody);

      console.log("se ingreso un vehiculo");
      this.placa = null;
      this.modelo = null;
      this.marca = null;
      this.anio = null;
      this.pFabricacion = null;
      this.cilindraje = null;
      this.avaluo = null;
      this.valDia = null;
    },
  },
};
</script>

<style>
</style>