<template>
<NavBarEmpleadoVue/>
<h1>Retiro sin reserva</h1>
<div >

<ReservaVehiculoVue @envioReserva="metodo(event)"/>

</div>
<div>

<RetirarVehiculoVue :valor="reserva"/>
  
</div>


  

</template>

<script>
import RetirarVehiculoVue from '@/components/RetirarVehiculo.vue'

import ReservaVehiculoVue from '@/components/ReservaVehiculo.vue'

import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue'

export default {
 components:{RetirarVehiculoVue,ReservaVehiculoVue,NavBarEmpleadoVue},
 methods: {
  data(){
    return{
      reserva:null
    }
  },
  metodo(nre){
    
    this.reserva= nre;
    console.log(this.reserva)
  }
},
}

</script>

<style>

</style>