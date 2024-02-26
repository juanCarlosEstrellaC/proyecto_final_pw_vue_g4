<template>
<h1>Actulizar Vehiculo</h1>
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
      Btn : "Actualizar",
    }
  }
}
</script>

<style>

</style>