<template>
  <h1>Registro</h1>
  <div class="contenedor" v-if="!mostrarMensaje">
    <label for="">Nombre:</label>
    <input type="text" v-model="nombre" />
    <label for="">Apellido:</label>
    <input type="text" v-model="apellido" />
    <label for="">Cédula:</label>
    <input type="text" v-model="cedula" />
    <label for="">Fecha de Nacimiento:</label>
    <input type="date" v-model="fechaNacimiento" />
    <label for="">Genero:</label>
    <input type="text" v-model="genero" />

    <button @click="presionarBoton">Registrar</button>
  </div>
  <div v-else>
    <Mensaje titulo="Registrado con Éxito" informacion="Ahora puede rentar un vehículo" @eventoMensaje="regresarEstado"/>
  </div>
</template>
  
<script>
import Mensaje from '@/components/Mensaje.vue';
export default {
  components:{
    Mensaje,
  },
  props: {
    nombreBoton: String,
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
      this.mostrarMensaje = true;
    },
    regresarEstado(){
      this.mostrarMensaje = false
    }
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
  margin: 10px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}
</style>