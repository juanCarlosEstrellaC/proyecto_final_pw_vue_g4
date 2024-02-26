<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <RetirarPage />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PaginaInicio from './pages/PaginaInicio.vue';
import RetirarPage from './pages/RetirarPage.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    PaginaInicio,
    RetirarPage
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
