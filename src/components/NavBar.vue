<template>
    <div>
    <router-link to="/registro">Registro</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
    <router-link to="/renta">Renta</router-link>
  </div>
</template>

<script>
export default {
    name:'NavBar'

}
</script>

<style scoped>
div a {
    color: #2c3e50;
    margin: 0px 10px;
    padding: 10px 10px;
    background-color: aqua;
}
.router-link-exact-active{
    background-color: rgb(77, 141, 220);
}
</style>