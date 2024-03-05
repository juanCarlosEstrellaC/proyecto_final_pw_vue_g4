<template>
<NavBar/>
<h1>Actualizar datos</h1>
<section>
  <div class="container">

  <div  v-if="!mostrarMensaje">
    <h5>Por favor, ingrese su número de cédula</h5>
  
    <FloatLabel>
        <InputText id="cedula" v-model="cedula"  @keydown.enter="buscarCedula"/>
        <label for="cedula">Cédula</label>
      </FloatLabel>

<Button @click="buscarCedula" severity="danger" raised  label="Buscar" />
    
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
export default {
  components: {
    Mensaje,
    FormularioCliente,
     NavBar,InputText,
    Dropdown,Button,FloatLabel
  },
  data() {
    return {
      cedula: null,
      mostrarMensaje: false,
      formulario: false,
    };
  },
  methods: {
    async presionarBoton(clienteRecibido) {
      const clienteConsultado = await consultarClientePorCIFachada(this.cedula);
      await actualizarClienteParcialFachada(
        clienteConsultado.id,
        clienteRecibido
      );
      this.mostrarMensaje = true;
    },
    regresarEstado() {
      this.mostrarMensaje = false;
      this.cedula= null;
      this.formulario= false;
    },
    async buscarCedula() {
      try {
        const c = await consultarClientePorCIFachada(this.cedula);
        if (c !== null) {
          this.formulario = true;
        } else {
          this.formulario = false;
          alert("Cédula no encontrada, por favor inténtelo de nuevo.");
        }
      } catch (error) {
        alert(
          "Se produjo un error al buscar la cédula. Por favor, ingrese una cédula válida."
        );
      }
    },
  },
};
</script>
  
<style scoped>
.mensaje {
  margin-top: 100px;
}

.inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin: 30px auto;
  background-color: aquamarine;
  border: solid 1px black;
}

.inicio label,
input,
button {
  margin-bottom: 30px;
}
input {
  text-align: center;
}
</style>