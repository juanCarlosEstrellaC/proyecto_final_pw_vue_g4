<template>
  <div v-if="!mostrarMensaje">
    <FormularioCliente
      titulo="Registro de Cliente"
      nombreBoton="Registrar"
      :editableCedula="true"
      @eventoBoton="presionarBoton($event)"
    />
  </div>
  <div v-else class="mensaje">
    <div v-if="registroExitoso">
      <Mensaje
        titulo="Registrado con Éxito"
        informacion="Ahora puede rentar un vehículo"
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
import Mensaje from "@/components/Mensaje.vue";
import FormularioCliente from "@/components/FormularioCliente.vue";
import { insertarClienteFachada } from "../helpers/clienteCliente.js";
import {setCedula} from "../servicios/cedulaServicio"

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
      await insertarClienteFachada(clienteRecibido);
      console.log("Cliente Registrado ", clienteRecibido);

      this.mostrarMensaje = true;
      this.registroExitoso = false;
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