<template>
  <h1>Pagina de reserva de Vehiculo desde Empleado</h1>

  <NavBarGenerico :elementos="barranavegacion"/>
</template>

<script>
import NavBarGenerico from "../components/NavBarGenerico.vue";

export default {
  name: "ReservaPage",
  components: {
    NavBarGenerico,
  },
  data() {
    return {
      barranavegacion: [
        {
          id: 1,
          text: "Retiro con reserva",
          ruta: "/empleado/rentar/conreserva",
        },
        { id: 2, text: "Retiro sin reserva", ruta: "/empleado/rentar/sinreserva" },
      ],
    };
  },
};
</script>

<style>
</style>