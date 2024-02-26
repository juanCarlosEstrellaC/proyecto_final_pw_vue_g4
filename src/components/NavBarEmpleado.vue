<template>
  <div>
    <router-link to="/empleados/clientes">Clientes</router-link>
    <router-link to="/empleados/vehiculo">Vehículo</router-link>
    <router-link to="/empleado/reserva">Reserva</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
div a {
  color: #2c3e50;
  margin: 0px 10px;
  font-weight: bold;
  border: solid 1px;
  padding: 10px 10px;
  border-radius: 12px;
  background-color: aqua;
}

.router-link-exact-active{

background-color: azure;
}
</style>