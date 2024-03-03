<template>
  <h1>Pagina de reserva de Vehiculo desde Empleado</h1>

  <NavBarGenerico :elementos="barranavegacion" />
</template>

<script>
import NavBarGenerico from "../components/NavBarGenerico.vue";

export default {
  name: "EmpleadoReservaPage",
  components: {
    NavBarGenerico,
  },
  data() {
    return {
      barranavegacion: [
        {
          id: 1,
          text: "Retiro con reserva",
          ruta: "/empleado/reserva/retiro/codigo",
        },
        {
          id: 2,
          text: "Retiro sin reserva",
          ruta: "/empleado/rentar/sinreserva",
        },
      ],
    };
  },
};
</script>

<style>
</style>