<template>
  <!-- <h1>Registro</h1>
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
  </div> -->

  <div v-if="!mostrarMensaje">
    <FormularioCliente
      titulo="Registro de Cliente"
      nombreBoton="Registrar"
      @eventoBoton="presionarBoton"
      :editableCedula="true"
      :valorCedula="cedula"
    />
  </div>
  <div v-else class="mensaje">
    <div v-if="registroExitoso">
      <Mensaje titulo="Registrado con Éxito" informacion="Ahora puede rentar un vehículo" @eventoMensaje="regresarEstado"/>
    </div>
    <div v-else>
      <Mensaje titulo="Error al registrarse" informacion="Ocurrió un error al registrarse" @eventoMensaje="regresarEstado"/>
    </div>
  </div>
</template>
  
<script>
import Mensaje from '@/components/Mensaje.vue';
import FormularioCliente from "@/components/FormularioCliente.vue";

export default {
  components:{
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
      cedula: null,
      fechaNacimiento: null,
      genero: null,
      mostrarMensaje: false,
      registroExitoso:true,
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
      this.registroExitoso = false;
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
  margin: 30px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}

label{
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