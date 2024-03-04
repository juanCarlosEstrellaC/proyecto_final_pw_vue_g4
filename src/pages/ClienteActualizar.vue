<template>
  <div class="inicio" v-if="!mostrarMensaje">
    <h3>Actualizar datos</h3>
    <h5>Por favor, ingrese su número de cédula</h5>
    <input type="text" v-model="cedula"  @keydown.enter="buscarCedula"/>
    <button @click="buscarCedula">Buscar</button>
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
</template>
  
<script>
import FormularioCliente from "@/components/FormularioCliente.vue";
import Mensaje from "@/components/Mensaje.vue";
import {
  actualizarClienteParcialFachada,
  consultarClientePorCIFachada,
} from "@/helpers/clienteCliente";

export default {
  components: {
    Mensaje,
    FormularioCliente,
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