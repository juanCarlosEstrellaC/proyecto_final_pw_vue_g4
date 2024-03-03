<template>
  <div v-if="!mostrarMensaje">
    <FormularioCliente
      titulo="Actualizar Datos"
      nombreBoton="Actualizar"
      :editablenumeroCedula="false"
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
</template>
  
<script>
import FormularioCliente from "@/components/FormularioCliente.vue";
import Mensaje from "@/components/Mensaje.vue";
import { actualizarClienteParcialFachada, consultarClientePorCIFachada } from "@/helpers/clienteCliente";


export default {
  components: {
    Mensaje,
    FormularioCliente,
  },
  data() {
    return {
      numeroCedula: null,
      mostrarMensaje: false,
    };
  },
  methods: {
    async presionarBoton(clienteRecibido) {
      const clienteConsultado = await consultarClientePorCIFachada(clienteRecibido.numeroCedula)
      await actualizarClienteParcialFachada(clienteConsultado.id, clienteRecibido);
      this.mostrarMensaje = true;
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