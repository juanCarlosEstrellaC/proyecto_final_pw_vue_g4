<template>
  <div class="contenedor">
    <h4>{{ titulo }}</h4>
    <h5>{{ informacion }}</h5>
    </div>
</template>

<script>
export default {
    name:"Mensajetemporal",
  props: {
    titulo: {
      type: String,
      default: "titulo",
    },
    informacion: {
      type: String,
      default: "informacion",
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
  height: 90px;
  width: 150px; /* Reducido el ancho a 250px */
  background-color: rgba(229, 174, 129, 0.288); /* Color con transparencia */
  border: 1px solid black;
  padding: 10px; /* Ajustado el espacio interior */
  border-radius: 8px; /* Bordes redondeados para un aspecto más elegante */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); /* Sombra para un efecto más tridimensional */
}
</style>