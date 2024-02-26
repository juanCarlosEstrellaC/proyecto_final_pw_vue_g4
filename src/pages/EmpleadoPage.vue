<template>
  <h1>Pagina general de Empleado</h1>
  <NavBarEmpleado/>
  <router-view/>
</template>

<script>


import NavBarEmpleado from '../components/NavBarEmpleado.vue'

export default {

name: 'EmpleadoPage',
  components: {
    NavBarEmpleado
  }
}
</script>

<style>

</style>