<template>
  <!-- <h1>Registro</h1>
  <div class="contenedor" v-if="!mostrarMensaje">
    <label for="">Nombre:</label>
    <input type="text" v-model="nombre" />
    <label for="">Apellido:</label>
    <input type="text" v-model="apellido" />
    <label for="">Cédula:</label>
    <input type="text" v-model="cedula" placeholder="Cedula invariante"/>
    <label for="">Fecha de Nacimiento:</label>
    <input type="date" v-model="fechaNacimiento" />
    <label for="">Genero:</label>
    <input type="text" v-model="genero" />

    <button @click="presionarBoton">Actualizar</button>
  </div> -->

  <div v-if="!mostrarMensaje">
    <FormularioCliente
      titulo="Actualizar"
      nombreBoton="Actualizar"
      @eventoBoton="presionarBoton"
      :editableCedula="false"
      :valorCedula="cedula"
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
export default {
  components: {
    Mensaje,
    FormularioCliente,
  },
  props: {
    nombreBoton: String,
  },
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: "111111111",
      fechaNacimiento: null,
      genero: null,
      mostrarMensaje: false,
    };
  },
  methods: {
    presionarBoton() {
      const cliente = {
        nombre: this.nombre,
        apellido: this.apellido,
        celula: this.cedula,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
      };
      this.mostrarMensaje = true;
    },
    regresarEstado() {
      this.mostrarMensaje = false;
    },
  },
};
</script>
  
<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  background-color: rgb(241, 222, 198);
  border: solid 1px black;
}

button {
  margin: 30px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}

label {
  margin-top: 10px;
}

input {
  margin: 5px;
  text-align: center;
}

.mensaje {
  margin-top: 100px;
}
</style>