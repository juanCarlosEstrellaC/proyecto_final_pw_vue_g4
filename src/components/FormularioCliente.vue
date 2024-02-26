<template>
  <h1>{{ titulo }}</h1>
  <div class="contenedor">
    <label for="">Nombre:</label>
    <input type="text" v-model="nombre" />
    <label for="">Apellido:</label>
    <input type="text" v-model="apellido" />
    <label for="">Cédula:</label>
    <input type="text" v-model="cedula" :disabled="!editableCedula" />
    <label for="">Fecha de Nacimiento:</label>
    <input type="date" v-model="fechaNacimiento" />
    <label for="">Genero:</label>
    <input type="text" v-model="genero" />

    <button @click="presionarBoton">{{ nombreBoton }}</button>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      default: "titulo",
    },
    nombreBoton: {
      type: String,
      default: "boton",
    },
    editableCedula: {
      type: Boolean,
      default: true,
    },
    valorCedula: {
      type: String,
      default: "",
    },
  },
  mounted() {
    if (!this.editableCedula) {
      this.cedula = this.valorCedula;
    }
  },
  data() {
    return {
      nombre: null,
      apellido: null,
      cedula: null,
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
      this.$emit("eventoBoton", cliente);
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
</style>