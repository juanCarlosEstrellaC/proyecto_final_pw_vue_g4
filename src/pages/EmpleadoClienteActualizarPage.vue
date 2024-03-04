<template>
  <h1>Actulizar cliente</h1>

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
  </div>
  <div>
    <button @click="actualizar">Actualizar</button>
  </div>

  <div v-if="datosincompletos">
    <MensajeTemp
      titulo="Error con los datos"
      informacion="Cedula ya existente en la base de datos"
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
import FormularioClienteFer from "../components/FormularioClienteFer.vue";
import FormularioGenerico from "../components/FormularioGenerico.vue";
import { actualizarEmpleadoClienteFachada } from "../helpers/clienteEmpleado.js";
import MensajeTemp from "@/components/MensajeTemp.vue";

export default {
  name: "EmpleadoClienteActualizarPage",

  components: {
    FormularioClienteFer,
    FormularioGenerico,
    MensajeTemp,
  },
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fNacimiento: null,
      genero: null,
      datosincompletos: false,
      correcto: false,
    };
  },
  methods: {
    async actualizar() {
      const clienteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fNacimiento,
        numeroCedula: this.cedula,
      };

      const cedulaParaBuscar = clienteBody.numeroCedula;
      if (this.cedula !== null && this.apellido !== null) {
        await actualizarEmpleadoClienteFachada(
          this.$route.params.id,
          clienteBody
        );

        this.correcto = true; 
       
        console.log("se actualzó");
        setTimeout(() => {
          this.$router.push({
            name: "VisualizarCliente",
            params: { cedula: cedulaParaBuscar },
          });
        }, 2500);

        this.nombre = null;
        this.apellido = null;
        this.genero = null;
        this.fNacimiento = null;
        this.cedula = null;
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