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
import { actualizarClienteFachada, consultarClientePorCedulaFachada } from "@/helpers/clienteCliente";
import { consultarClienteFachada } from "@/helpers/clienteCliente";
import { getCedula } from "@/servicios/cedulaServicio";


export default {
  components: {
    Mensaje,
    FormularioCliente,
  },
  data() {
    return {
      cedula: getCedula(),
      mostrarMensaje: false,
    };
  },
  methods: {
    async presionarBoton(clienteRecibido) {
      console.log(this.cedula);
      // const cli = await consultarClientePorCedulaFachada(this.cedula);
      // const id = cli.id;
      // await actualizarClienteFachada(id, clienteRecibido);
      // console.log("Cliente Actualizado: ", clienteRecibido);
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