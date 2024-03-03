<template>
  <div class="home-page">
    
    <h1>Pagina Avis</h1>
    <router-link to="/clientes">Clientes</router-link>
    <router-link to="/empleados">Empleados</router-link>
    <router-view />
  </div>

</template>

<script>
export default {};
</script>

<style>
.home-page {
  /* Camino relativo desde la carpeta public o directamente desde assets con Webpack */
  background-image: url('@/assets/auto_rojo.jpg');
  background-size: cover; /* Cubre todo el espacio disponible */
  background-position: center; /* Centra la imagen en el elemento */
  height: 100vh; /* Asegura que la altura sea la de la ventana del navegador */
  width: 100%;
}

</style>