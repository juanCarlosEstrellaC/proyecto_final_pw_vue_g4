<template>
<h1>Ingresar Vehículo</h1>
<FormularioVehiculo :txtBtn="Btn"/>

</template>


<script>
import FormularioVehiculo from '../components/FormularioVehiculo.vue'

export default {
  name: "IngresoVehiculoPage",
  components: {
    FormularioVehiculo,
  },
  data(){
    return{
      Btn : "Guardar",
    }
  }
}
</script>

<style>
</style>