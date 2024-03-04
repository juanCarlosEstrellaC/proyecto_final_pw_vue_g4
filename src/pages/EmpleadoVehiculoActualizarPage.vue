<template>
  <h1>Actulizar Vehiculo</h1>
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

    <button @click="actualizar">Actualizar</button>
  </div>

  <div v-if="correcto">
    <label for="">se actualizó correctamente</label>
  </div>

  <div v-if="datosincompletos">
    <MensajeTemp
      titulo="Error con los datos"
      informacion="Completa los datos minimos"
    />
  </div>

  <div v-if="correcto">
    <MensajeTemp
      titulo="Actulizacion Correcta"
      informacion="Todos se hizo correctamente"
    />
  </div>
</template>

<script>
import FormularioGenerico from "../components/FormularioGenerico.vue";
import { actualizarEmpleadoVehiculoFachada } from "../helpers/clienteEmpleado.js";
import MensajeTemp from "@/components/MensajeTemp.vue";

export default {
  name: "EmpleadoVehiculoActualizarPage",
  components: {
    FormularioGenerico,
    MensajeTemp,
  },
  data() {
    return {
      Btn: "Actualizar",
      placa: null,
      modelo: null,
      marca: null,
      anio: null,
      pFabricacion: null,
      cilindraje: null,
      avaluo: null,
      valDia: null,
      datosincompletos: false,
      correcto: false,
    };
  },
  methods: {
    async actualizar() {
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
      if (
        this.placa !== null &&
        this.marca !== null &&
        this.modelo !== null &&
        this.anio !== null &&
        this.pFabricacion !== null &&
        this.cilindraje !== null &&
        this.valDia !== null &&
        this.avaluo !== null &&
        this.cilindraje !== null
      ) {
        const placaParaBuscar = vehiculoBody.placa;
        await actualizarEmpleadoVehiculoFachada(
          this.$route.params.id,
          vehiculoBody
        );

        this.correcto = true;
        console.log("se actualzó");
        setTimeout(() => {
          this.$router.push({
            name: "VisualizarVehiculo",
            params: { placa: placaParaBuscar },
          });
        }, 2500);

        this.placa = null;
        this.modelo = null;
        this.marca = null;
        this.anio = null;
        this.pFabricacion = null;
        this.cilindraje = null;
        this.avaluo = null;
        this.valDia = null;
        return;
      }
      this.datosincompletos = true;
      setTimeout(() => {
        this.datosincompletos = false;
      }, 3000);
    },
  },
};
</script>

<style>
</style>