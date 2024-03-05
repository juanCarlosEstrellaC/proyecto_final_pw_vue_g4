<template>
<NavBarVue/>
  <h1>Reservar</h1>
  <ReservaVehiculoVue/>
</template>

<script>
import ReservaVehiculoVue from '@/components/ReservaVehiculo.vue'

import NavBarVue from '@/components/NavBar.vue'
export default {
components:{
  ReservaVehiculoVue,NavBarVue
}
}
</script>

<style>

</style>