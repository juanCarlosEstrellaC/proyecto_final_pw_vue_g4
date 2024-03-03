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


export default {
  components: {
    Mensaje,
    FormularioCliente,
  },
  data() {
    return {
      numeroCedula: "",
      mostrarMensaje: false,
    };
  },
  methods: {
    async presionarBoton(clienteRecibido) {
      console.log(this.numeroCedula);
      const cli = await consultarClientePornumeroCedulaFachada(this.numeroCedula);
      const id = cli.id;
      await actualizarClienteFachada(id, clienteRecibido);
      console.log("Cliente Actualizado: ", clienteRecibido);
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