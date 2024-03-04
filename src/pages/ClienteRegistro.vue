<template>
  <div v-if="!mostrarMensaje">
    <FormularioCliente
      titulo="Registro de Cliente"
      nombreBoton="Registrar"
      @eventoBoton="presionarBoton($event)"
    />
  </div>
  <div v-else class="mensaje">
    <div v-if="registroExitoso">
      <Mensaje
        titulo="Registrado con Éxito"
        informacion="¡Felicidades!, Ahora puede rentar un vehículo"
        @eventoMensaje="regresarEstado"
      />
    </div>
    <div v-else>
      <Mensaje
        titulo="Error al registrarse"
        informacion="Ocurrió un error al registrarse"
        @eventoMensaje="regresarEstado"
      />
    </div>
  </div>
</template>
  
<script>
import FormularioCliente from "@/components/FormularioCliente.vue";
import Mensaje from "@/components/Mensaje.vue";
import { insertarClienteFachada } from "../helpers/clienteCliente.js";

export default {
  components: {
    Mensaje,
    FormularioCliente,
  },
  data() {
    return {
      mostrarMensaje: false,
      registroExitoso: true,
    };
  },
  methods: {
    async presionarBoton(clienteRecibido) {
      console.log("Cliente Recibido ", clienteRecibido);
      console.log("ClienteRegistro: ", clienteRecibido.numeroCedula);

      try {
        const respuesta = await insertarClienteFachada(clienteRecibido);
        if (respuesta === 1) {
          this.mostrarMensaje = true;
          this.registroExitoso = true;
        } else {
          console.error("Error al registrar cliente: ", respuesta);
          this.mostrarMensaje = true;
          this.registroExitoso = false;
        }
      } catch (error) {
        console.error("Error al registrar cliente: ", error);
        this.mostrarMensaje = true;
        this.registroExitoso = false;
      }
    },
    regresarEstado() {
      this.mostrarMensaje = false;
    },

  },
};
</script>
  
<style scoped>
.mensaje {
  margin-top: 100px;
}
</style>