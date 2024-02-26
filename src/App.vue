<template>
  <EmpleadoPage/>
  <Footer/>
</template>

<script>
import PaginaInicio from './pages/PaginaInicio.vue'
import Footer from './components/Footer.vue'
import EmpleadoPage from './pages/EmpleadoPage.vue'


export default {
  name: 'App',
  components: {
    PaginaInicio,
    EmpleadoPage,
    Footer
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
}
</style>
