<template>
  <div v-if="!mostrarMensaje">
    <FormularioCliente
      titulo="Actualizar Datos"
      nombreBoton="Actualizar"
      :editableCedula="false"
      :valorCedula="cedula"
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
import Mensaje from "@/components/Mensaje.vue";
import FormularioCliente from "@/components/FormularioCliente.vue";
import { actualizarClienteFachada } from "@/helpers/clienteCliente";
import { consultarClienteFachada } from "@/helpers/clienteCliente";

export default {
  components: {
    Mensaje,
    FormularioCliente,
  },
  data() {
    return {
      cedula: "111111111",
      mostrarMensaje: false,
    };
  },
  methods: {
    async presionarBoton(clienteRecibido) {
      await actualizarClienteFachada(clienteRecibido);
      console.log("Cliente Actualizado: ", clienteRecibido);
      this.mostrarMensaje = true;
    },
    regresarEstado() {
      this.mostrarMensaje = false;
    },
    async buscarCliente(){
      const c = await consultarClienteFachada(id)
    }
  },
};
</script>
  
<style scoped>
.mensaje {
  margin-top: 100px;
}
</style>