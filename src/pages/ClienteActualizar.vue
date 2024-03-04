<template>
<NavBarVue/>
<section>
<div class="container">



  <div class="inputs" v-if="!mostrarMensaje">
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
  </div>
  </section>
</template>
  
<script>
import FormularioCliente from "@/components/FormularioCliente.vue";
import Mensaje from "@/components/Mensaje.vue";

import NavBarVue from '@/components/NavBar.vue';
export default {
  components: {
    Mensaje,
    FormularioCliente,NavBarVue
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