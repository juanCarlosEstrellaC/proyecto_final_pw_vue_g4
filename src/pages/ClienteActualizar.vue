<template>
  <div>
    <NavBar/>
    <h1>Actualizar datos</h1>
    <section>
      <div class="container">
        <div v-if="!mostrarMensaje">
          <h5>Por favor, ingrese su número de cédula</h5>
          <FloatLabel>
            <InputText id="cedula" v-model="cedula" @keydown.enter="buscarCedula"/>
            <label for="cedula">{{cedula}}</label>
          </FloatLabel>
          <Button @click="buscarCedula" severity="danger" raised label="Buscar" />
        </div>
        <div v-if="formulario">
          <div v-if="!mostrarMensaje">
            <FormularioCliente
              titulo=""
              nombreBoton="Actualizar"
              :mostrarCedula="false"
              @eventoBoton="presionarBoton($event)"
            />
          </div>
          <div v-else class="mensaje">
            <Mensaje
              titulo="Actualización exitosa"
              informacion="Sus datos están al día."
              @eventoMensaje="regresarEstado"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Dialog para la alerta -->
    <Dialog v-model="mostrarAlerta" :visible="mostrarAlerta" header="Alerta" :modal="true" @update:visible="ocultarAlerta">
      <p>{{ mensajeAlerta }}</p>
    </Dialog>

    <!-- Dialog para la actualización exitosa -->
    <Dialog v-model="mostrarActualizacionExitosa" :visible="mostrarActualizacionExitosa" header="Actualización Exitosa" :modal="true" @update:visible="ocultarActualizacionExitosa">
      <p>Sus datos han sido actualizados correctamente.</p>
    </Dialog>
  </div>
</template>
  
<script>
import FormularioCliente from "@/components/FormularioCliente.vue";
import Mensaje from "@/components/Mensaje.vue";
import {
  actualizarClienteParcialFachada,
  consultarClientePorCIFachada,
} from "@/helpers/clienteCliente";
import NavBar from '@/components/NavBar.vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import FloatLabel from 'primevue/floatlabel';
import Dialog from 'primevue/dialog';

export default {
  components: {
    Mensaje,
    FormularioCliente,
    NavBar,
    InputText,
    Dropdown,
    Button,
    FloatLabel,
    Dialog
  },
  data() {
    return {
      cedula: null,
      mostrarMensaje: false,
      formulario: false,
      mostrarAlerta: false,
      mensajeAlerta: '',
      mostrarActualizacionExitosa: false
    };
  },
  methods: {
    async presionarBoton(clienteRecibido) {
      if (!this.camposLlenos(clienteRecibido)) {
        this.mostrarAlerta = true;
        this.mensajeAlerta = "Por favor, complete todos los campos.";
        return;
      }
      
      const clienteConsultado = await consultarClientePorCIFachada(this.cedula);
      await actualizarClienteParcialFachada(clienteConsultado.id, clienteRecibido);
      this.mostrarActualizacionExitosa = true;
    },
    regresarEstado() {
      this.mostrarMensaje = false;
      this.cedula = null;
      this.formulario = false;
    },
    async buscarCedula() {
      try {
        const c = await consultarClientePorCIFachada(this.cedula);
        if (c !== null) {
          this.formulario = true;
        } else {
          this.formulario = false;
          this.mostrarAlerta = true;
          this.mensajeAlerta = "Cédula no encontrada, por favor inténtelo de nuevo.";
        }
      } catch (error) {
        this.mostrarAlerta = true;
        this.mensajeAlerta = "Se produjo un error al buscar la cédula. Por favor, ingrese una cédula válida.";
      }
    },
    ocultarAlerta() {
      this.mostrarAlerta = false;
    },
    ocultarActualizacionExitosa() {
      this.mostrarActualizacionExitosa = false;
    },
    camposLlenos(cliente) {
      return cliente.nombre && cliente.apellido && cliente.correo;
    }
  },
};
</script>
  
<style scoped>
.mensaje {
  margin-top: 100px;
}


</style>
