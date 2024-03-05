<template>
  <NavBarEmpleadoVue />

  <h1>Actulizar Vehiculo</h1>
  <section>
    <div class="container">
      <div>
        <FormularioGenerico type="text" etiqueta="Placa" v-model="placa" />

        <FormularioGenerico type="text" etiqueta="Modelo" v-model="modelo" />

        <label class="label" for="marca">Marca</label>
        <Dropdown
          v-model="marca"
          :options="marcaOptions"
          optionLabel="label"
          placeholder="Selecciona una marca"
        />

        <label class="label" for="AñoFabricación">Año de Fabricación</label>
        <InputText id="AñoFabricación" v-model="anio" type="date" />

        <FormularioGenerico
          type="text"
          etiqueta="Pais Fabricaión"
          v-model="pFabricacion"
        />

        <FormularioGenerico
          type="number"
          etiqueta="Cilindraje"
          v-model="cilindraje"
        />

        <FormularioGenerico type="number" etiqueta="Avalúo" v-model="avaluo" />

        <FormularioGenerico
          type="number"
          etiqueta="Valor por día"
          v-model="valDia"
        />
        <Button
          @click="actualizar"
          severity="danger"
          raised
          label="Actualizar vehículo"
        />
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
    </div>
  </section>
</template>

<script>
import FormularioGenerico from "../components/FormularioGenerico.vue";
import { actualizarEmpleadoVehiculoFachada } from "../helpers/clienteEmpleado.js";
import MensajeTemp from "@/components/MensajeTemp.vue";
import NavBarEmpleadoVue from "@/components/NavBarEmpleado.vue";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import FloatLabel from "primevue/floatlabel";
export default {
  name: "EmpleadoVehiculoActualizarPage",
  components: {
    FormularioGenerico,
    MensajeTemp,
    NavBarEmpleadoVue,
    InputText,
    Dropdown,
    Button,
    FloatLabel,
  },
  data() {
    return {
      marcaOptions: [
        { label: "Audi" },
        { label: "BMW" },
        { label: "Chevrolet" },
        { label: "Ford" },
        { label: "Honda" },
        { label: "Hyundai" },
        { label: "Kia" },
        { label: "Mazda" },
        { label: "Mercedes-Benz" },
        { label: "Nissan" },
        { label: "Toyota" },
        { label: "Volkswagen" },
        { label: "Volvo" },
        { label: "Fiat" },
        { label: "Jeep" },
        { label: "Subaru" },
        { label: "Tesla" },
        { label: "Porsche" },
        { label: "Lexus" },
        { label: "Infiniti" },
        { label: "Acura" },
        { label: "Jaguar" },
        { label: "Land Rover" },
        { label: "Mitsubishi" },
        { label: "Suzuki" },
        { label: "Chrysler" },
        { label: "Dodge" },
        { label: "GMC" },
        { label: "Ram" },
        { label: "Buick" },
        { label: "Cadillac" },
        { label: "Lincoln" },
        { label: "Alfa Romeo" },
        { label: "Genesis" },
        { label: "Mini" },
      ],
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
        marca: this.marca ? this.marca.label : null,
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