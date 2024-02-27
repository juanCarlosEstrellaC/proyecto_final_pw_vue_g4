<template>
  <h1>Buscar vehículo por Marca</h1>
  <input type="text" name="" id="" v-model="marca" />
  <button @click="consultarPorMarca">Buscar</button>

  <div>
    <table>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="vehiculo in vehiculos" :key="vehiculo.id"></tr> -->
        <tr>
          <td>{{ chevrolet}}</td>
          <td>{{ sail }}</td>
          <td>{{pyu895 }}</td>
          <td>
            <button @click="goVisualizar()">Visualizar</button>
            <button @click="goActulizar()">Actualizar</button>
            <button @click="goEliminar()">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FormularioVehiculo",
  data() {
    return {
      marcaid: null,
      data: null,
    };
  },
  methods: {
    //consulta un VehiculoTO
    async consultarPorId() {
      const data = await consultarVehiculoFachada(this.marca);
      console.log(vehiculos);
    },
 //debe ir el id del vehiculo como argumento para relizar la busqueda de Vehiculo completo en el path 
    goVisualizar() {
      this.$router.push("/empleados");
    },
    //debe ir el id del vehiculo como argumento para relizar la actualizacion en el path 
    goActulizar() {
      this.$router.push("/empleados/vehiculo/actualizar");
    },
    //solo debe mostrar mensaje si se eliminó o no el vehículo
    goEliminar() {
      this.$router.push("/empleados/vehiculo/actualizar");
    },
  },
};
</script>

<style>
</style>