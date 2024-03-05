<template>
  <NavBarEmpleadoVue/>
  <h1>Retiro sin reserva</h1>

  <div>
    <ReservaVehiculoVue v-show="this.reserva===null" @envioReserva="metodo($event)"/>
  </div>

  <div>
    <RetirarVehiculoVue v-if="this.reserva!==null" :valor="reserva"/>
  </div>
</template>

<script>
import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue'
import ReservaVehiculoVue from '@/components/ReservaVehiculo.vue'
import RetirarVehiculoVue from '@/components/RetirarVehiculo.vue'

export default {
  components: {
    ReservaVehiculoVue,
    RetirarVehiculoVue,
    NavBarEmpleadoVue
  },
  data() {
    return {
      reserva: null,
      mostrar: false
    };
  },
  methods: {
    metodo(nre) {
      this.reserva = nre;
     
        console.log(this.reserva)
    
       
      
    }
  }
}
</script>

<style>
</style>
