<template>
  <h1>Pagina para gestion de los Clientes </h1>
  <NavBarGenerico :elementos="barranavegacion"/>
  <router-view/>
</template>

<script>

import NavBarGenerico from '../components/NavBarGenerico.vue'

export default {
  name:'EmpleadoClientePage'
  ,
  components: {
    NavBarGenerico,
  },
  data(){

    return{

      barranavegacion:[
        {id:1, text:'Registrar Cliente', ruta:'/empleados/clientes/registro'},
        {id:2, text:'Buscar Cliente', ruta:'/empleados/clientes/registro'}
      ],

    }
  }


}
</script>

<style>

</style>