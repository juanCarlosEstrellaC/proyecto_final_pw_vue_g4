<template>

<!-- <EmpleadoPage/> -->
  <PaginaInicio/>
 
  

</template>

<script>
import PaginaInicio from './pages/PaginaInicio.vue'
import Footer from './components/Footer.vue'
import EmpleadoPage from './pages/EmpleadoPage.vue'
import Cliente from './pages/Clientes.vue'

export default {
  name: 'App',
  components: {
    PaginaInicio,
    EmpleadoPage,
    Footer,
    Cliente, 
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  min-height: 100vh;
  padding-bottom: 60px; /* Ajusta esto al alto de tu footer */
}


</style>
