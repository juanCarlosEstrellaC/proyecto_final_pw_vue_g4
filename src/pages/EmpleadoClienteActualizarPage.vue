<template>

<NavBarEmpleadoVue/>
 <h1>Actualizar</h1>
<section>

  <div class="container">
 
  <div>
     
    <FormularioGenerico
      type="text"
      etiqueta="Cédula"
 
      v-model="cedula"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Nombre"

      v-model="nombre"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Apellido"
  
      v-model="apellido"
    />
     <label class="label" for="fechaNacimiento">Fecha de Nacimiento</label>
        <InputText id="fechaNacimiento" v-model="fNacimiento" type="date" />

    <FloatLabel>
       <label class="label" for="genero">Genero</label>
         <Dropdown v-model="genero" :options="generoOptions" optionLabel="label" placeholder="Selecciona un género" />
       
      </FloatLabel>

     <Button @click="actualizar" severity="danger" raised  label="Actualizar" />



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
  </div> </div>
</section>
</template>

<script>
import FormularioClienteFer from "../components/FormularioClienteFer.vue";
import FormularioGenerico from "../components/FormularioGenerico.vue";
import { actualizarEmpleadoClienteFachada } from "../helpers/clienteEmpleado.js";
import MensajeTemp from "@/components/MensajeTemp.vue";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue';
export default {
  name: "EmpleadoClienteActualizarPage",

  components: {
    FormularioClienteFer,
    FormularioGenerico,
    MensajeTemp,
    NavBarEmpleadoVue,InputText,
    Dropdown,Button
  },
  data() {
    return {
        generoOptions: [
        { label: 'Masculino', value: 'masculino' },
        { label: 'Femenino', value: 'femenino' },
        { label: 'Otro', value: 'otro' }
      ],
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
        genero: this.genero ? this.genero.label : null,
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