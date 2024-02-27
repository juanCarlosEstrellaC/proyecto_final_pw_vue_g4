<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <ReportePage />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PaginaInicio from './pages/PaginaInicio.vue';
import ReportePage from './pages/ReportePage.vue';
import RetirarPage from './pages/RetirarPage.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    PaginaInicio,
    ReportePage
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
