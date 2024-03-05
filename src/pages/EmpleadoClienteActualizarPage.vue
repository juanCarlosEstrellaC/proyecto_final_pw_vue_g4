<template>
  <div>
    <NavBarEmpleadoVue />
    <h1>Actualizar Cliente</h1>
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
            <label class="label" for="genero">Género</label>
            <Dropdown v-model="genero" :options="generoOptions" optionLabel="label" placeholder="Selecciona un género" />
          </FloatLabel>

          <Button @click="actualizar" severity="danger" raised label="Actualizar" />

          <!-- Dialog para datos incompletos -->
          <Dialog v-model="mostrarDialogDatosIncompletos" header="Error" :visible="mostrarDialogDatosIncompletos" @hide="ocultarDialogDatosIncompletos">
            <p>Todos los campos son obligatorios. Por favor, complete todos los campos.</p>
          </Dialog>

          <!-- Dialog para actualización correcta -->
          <Dialog v-model="mostrarDialogCorrecto" header="Éxito" :visible="mostrarDialogCorrecto" @hide="ocultarDialogCorrecto">
            <p>La actualización se realizó correctamente.</p>
          </Dialog>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FormularioGenerico from "../components/FormularioGenerico.vue";
import { actualizarEmpleadoClienteFachada } from "../helpers/clienteEmpleado.js";
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue';
import Dialog from 'primevue/dialog';

export default {
  name: "EmpleadoClienteActualizarPage",
  components: {
    FormularioGenerico,
    NavBarEmpleadoVue,
    InputText,
    Dropdown,
    Button,
    FloatLabel,
    Dialog
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
      mostrarDialogDatosIncompletos: false,
      mostrarDialogCorrecto: false,
    };
  },
  methods: {
    async actualizar() {
      // Verificar si todos los campos están llenos
      if (
        this.cedula &&
        this.nombre &&
        this.apellido &&
        this.genero &&
        this.fNacimiento
      ) {
        const clienteBody = {
          nombre: this.nombre,
          apellido: this.apellido,
          genero: this.genero.label,
          fechaNacimiento: this.fNacimiento,
          numeroCedula: this.cedula,
        };

        const cedulaParaBuscar = clienteBody.numeroCedula;
        await actualizarEmpleadoClienteFachada(
          this.$route.params.id,
          clienteBody
        );

        this.mostrarDialogCorrecto = true;
        setTimeout(() => {
          this.mostrarDialogCorrecto = false;
          this.$router.push({
            name: "VisualizarCliente",
            params: { cedula: cedulaParaBuscar },
          });
        }, 2500);

        this.limpiarCampos();
      } else {
        this.mostrarDialogDatosIncompletos = true;
        setTimeout(() => {
          this.mostrarDialogDatosIncompletos = false;
        }, 3000);
      }
    },

    // Limpiar campos después de la actualización
    limpiarCampos() {
      this.cedula = null;
      this.nombre = null;
      this.apellido = null;
      this.genero = null;
      this.fNacimiento = null;
    },

    // Ocultar dialog de datos incompletos
    ocultarDialogDatosIncompletos() {
      this.mostrarDialogDatosIncompletos = false;
    },

    // Ocultar dialog de actualización correcta
    ocultarDialogCorrecto() {
      this.mostrarDialogCorrecto = false;
    },
  },
};
</script>

<style scoped>
  /* Estilos opcionales para personalizar los dialogs */
</style>
