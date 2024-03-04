<template>
  <div class="contenedor">
    <h1>{{ titulo }}</h1>
    <h4>{{ informacion }}</h4>
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
    informacion: {
      type: String,
      default: "informacion",
    },
    nombreBoton: {
      type: String,
      default: "Aceptar",
    },
  },
  data() {
    return {};
  },
  methods:{
    presionarBoton(){
        //window.history.back();
        this.$emit("eventoMensaje")
    }
  }
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
  background-color: #66c9e7;
  border: solid 1px black;
}

button {
  margin: 10px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}
</style>