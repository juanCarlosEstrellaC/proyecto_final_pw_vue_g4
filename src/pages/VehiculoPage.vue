<template>
  <h1>Pagina de reserva de Vehiculo desde Empleado</h1>

<NavBarGenerico :elementos="barranavegacion"/>

</template>

<script>
import NavBarGenerico from '../components/NavBarGenerico.vue'

export default {
  name:'VehiculoPage'
  ,
  components: {
    NavBarGenerico,
  },
  data(){

    return{

      barranavegacion:[
        {id:1, text:'Nuevo Vehículo', ruta:'/empleados/vehiculo/ingreso'},
        {id:2, text:'Buscar Vehículo', ruta:'/empleados/vehiculo/busqueda'}
      ],

    }
  }

}
</script>

<style>

</style>