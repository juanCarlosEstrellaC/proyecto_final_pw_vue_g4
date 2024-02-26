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
        <!--
          <tr v-for="usuario in usuarios" :key="usuario.id"> 
        -->
        <tr>
          <td>{{dat.marcaid}}</td>
          <td>{{data.modelo}}</td>
          <td>{{data.modelo}}</td>
          <td>
            <button @click="goVisualizar(marca.id)">Visualizar</button>
            <button @click="goActualizar(marca.id)">Actualizar</button>
            <button @click="goEliminar(marca.id)">Eliminar</button>
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
      data: null
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarVehiculoFachada(this.marca);
      console.log(data);
    },

    goVisualizar(id) {},
    goActulizar(id) {},
    goeliminar(id) {},
  },
};
</script>

<style>
</style>