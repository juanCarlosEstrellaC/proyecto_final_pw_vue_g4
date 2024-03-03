<template>
  <h1>Registro cliente por parte de Empelado</h1>

  <div v-if="!mostrarMensaje">
    <FormularioGenerico
      type="text"
      etiqueta="Cédula"
      placeholder="0987654321"
      v-model="cedula"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Nombre"
      placeholder="Juan"
      v-model="nombre"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Apellido"
      placeholder="Montes"
      v-model="apellido"
    />
    <FormularioGenerico
      type="date"
      etiqueta="Fecha nacimiento"
      placeholder="12/12/2018"
      v-model="fNacimiento"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Genero"
      placeholder="F ó M"
      v-model="genero"
    />

    <label> Registro por parte del empleado</label>

    <div>
      <button @click="insertar">Ingreso</button>
    </div>
  </div>

  <div v-else class="mensaje">
    <div v-if="registroExitoso">
      <Mensaje
        titulo="Registrado con Éxito"
        informacion="Se Ingreso el cliente por un usuario"
        @eventoMensaje="regresarEstado"
      />
    </div>
    <div v-else>
      <Mensaje
        titulo="Error al registrarse"
        informacion="Ocurrió un error al registrarse"
        @eventoMensaje="regresarEstado"
      />
    </div>
  </div>
  <div v-if="errorcedula">
    <MensajeTemp
      titulo="Error con los datos"
      informacion="Cedula ya existente en la base de datos"
    />
  </div>
</template>

<script>
import FormularioGenerico from "../components/FormularioGenerico.vue";
import Mensaje from "@/components/Mensaje.vue";
import { insertarEmpleadoClienteFachada } from "../helpers/clienteEmpleado.js";
import MensajeTemp from "@/components/MensajeTemp.vue";
export default {
  name: "EmpleadoClienteRegistroPage",
  components: {
    FormularioGenerico,
    Mensaje,
    MensajeTemp,
  },
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fNacimiento: null,
      genero: null,
      mostrarMensaje: false,
      registroExitoso: true,
      errorcedula: false,
    };
  },
  methods: {
    async insertar() {
      const clienteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fNacimiento,
        numeroCedula: this.cedula,
      };

      console.log("Cliente Recibido ", clienteBody);
      console.log("ClienteRegistro: ", clienteBody.numeroCedula);
      const val = await insertarEmpleadoClienteFachada(clienteBody);
      console.log("este es el valor: " + val);

      try {
        const respuesta = await insertarEmpleadoClienteFachada(clienteBody);
        console.log(respuesta);
        if (respuesta === 1) {
          console.log("se ingreso un vehiculo");
          this.mostrarMensaje = true;
          this.registroExitoso = true;
        } else if (respuesta === 2) {
          console.log("Error al registrar vehiculo: Placa ya existente");
          this.errorcedula = true; // Establece errorcedula a true inicialmente

          // Espera 3 segundos y luego cambia errorcedula a false
          setTimeout(() => {
            this.errorcedula = false;
          }, 3000);
        } else if (respuesta === 3) {
          console.log("datos incompletos");
        } else {
          console.error("Error al registrar cliente: ", respuesta);
          this.mostrarMensaje = true;
          this.registroExitoso = false;
        }
      } catch (error) {
        console.error("Error al registrar cliente: ", error);
        this.mostrarMensaje = true;
        this.registroExitoso = false;
      }

      this.nombre = null;
      this.apellido = null;
      this.genero = null;
      this.fNacimiento = null;
      this.cedula = null;
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