<template>
  <h1>Ingresar Vehículo</h1>

  <!-- <FormularioVehiculo :txtBtn="Btn" />  -->

  <div v-if="!mostrarMensaje">
    <FormularioGenerico
      type="text"
      etiqueta="Placa"
      placeholder="ABC-01234"
      v-model="placa"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Modelo"
      placeholder="A4"
      v-model="modelo"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Marca"
      placeholder="BMW"
      v-model="marca"
    />
    <FormularioGenerico
      type="date"
      etiqueta="Año Fabricación"
      placeholder="12/12/2018"
      v-model="anio"
    />

    <FormularioGenerico
      type="text"
      etiqueta="Pais Fabricaión"
      placeholder="Mexico"
      v-model="pFabricacion"
    />

    <FormularioGenerico
      type="number"
      etiqueta="Cilindraje"
      placeholder="BMW"
      v-model="cilindraje"
    />

    <FormularioGenerico
      type="number"
      etiqueta="Avalúo"
      placeholder="18000.."
      v-model="avaluo"
    />

    <FormularioGenerico
      type="number"
      etiqueta="Valor por día"
      placeholder="BMW"
      v-model="valDia"
    />
    <div>
      <button @click="ingreso">Ingreso</button>
    </div>
  </div>

  <div v-else class="mensaje">
    <div v-if="registroExitoso">
      <Mensaje
        titulo="Registrado con Éxito"
        informacion="Se Ingreso el vehiculo por un usuario"
        @eventoMensaje="regresarEstado"
      />
    </div>
    <div v-else>
      <Mensaje
        titulo="Error al registrarse"
        informacion="Ocurrió un error al ingresar vehiculo"
        @eventoMensaje="regresarEstado"
      />
    </div>
  </div>

  <div v-if="errorplaca">
    <MensajeTemp
      titulo="Error con los datos"
      informacion="Placa ya existente en la base de datos"
    />
  </div>
</template>


<script>
import FormularioVehiculoFer from "../components/FormularioVehiculoFer.vue";
import FormularioGenerico from "../components/FormularioGenerico.vue";
import Mensaje from "@/components/Mensaje.vue";
import MensajeTemp from "@/components/MensajeTemp.vue";
import { insertarEmpleadoVehiculoFachada } from "../helpers/clienteEmpleado.js";

export default {
  name: "EmpleadoVehiculoIngresoPage",
  components: {
    FormularioVehiculoFer,
    FormularioGenerico,
    Mensaje,
    MensajeTemp,
  },
  data() {
    return {
      Btn: "Guardar",

      placa: null,
      modelo: null,
      marca: null,
      anio: null,
      pFabricacion: null,
      cilindraje: null,
      avaluo: null,
      valDia: null,
      mostrarMensaje: false,
      registroExitoso: true,
      errorplaca: false,
    };
  },
  methods: {
    async ingreso() {
    const vehiculoBody = {
        placa: this.placa,
        modelo: this.modelo,
        marca: this.marca,
        anioFabricacion: this.anio,
        paisFabricacion: this.pFabricacion,
        cilindraje: this.cilindraje,
        avaluo: this.avaluo,
        renta: this.valDia,
    };

    try {
        const respuesta = await insertarEmpleadoVehiculoFachada(vehiculoBody);

console.log(respuesta);
        if (respuesta === 1) {
            console.log("se ingreso un vehiculo");
            this.mostrarMensaje = true;
            this.registroExitoso = true;
        } else if (respuesta === 2) {
            console.log("Error al registrar vehiculo: Placa ya existente");
            this.errorplaca = true; // Establece errorcedula a true inicialmente

            // Espera 3 segundos y luego cambia errorcedula a false
            setTimeout(() => {
                this.errorplaca = false;
            }, 3000);
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

    this.placa = null;
    this.modelo = null;
    this.marca = null;
    this.anio = null;
    this.pFabricacion = null;
    this.cilindraje = null;
    this.avaluo = null;
    this.valDia = null;
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