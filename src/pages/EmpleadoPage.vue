<template>
  <h1>Pagina general de Empleado</h1>
  <NavBarGenerico :elementos="barranavegacion"/>
 <router-view/>
</template>

<script>


import NavBarGenerico from '../components/NavBarGenerico.vue'

export default {

name: 'EmpleadoPage',
  components: {
    NavBarGenerico,
  },
  data(){

    return{

      barranavegacion:[
        {id:1, text:'Clientes', ruta:'/empleados/clientes'},
        {id:2, text:'Vehículo', ruta:'/empleados/vehiculo'},
        {id:2, text:'Reserva', ruta:'/empleado/reserva'}
      ],

    }
  }
}
</script>

<style>

</style>