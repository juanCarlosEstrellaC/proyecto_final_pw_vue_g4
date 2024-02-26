<template>
  <h1>Rentar</h1>
  <div class="contenedor">
    <label for="">Marca:</label>
    <input type="text" v-model="marca" />
    <label for="">Modelo:</label>
    <input type="text" v-model="modelo" />
    <button @click="presionarBoton">Buscar</button>
  </div>

  <div class="tabla">
    <table>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Año de Fabricación</th>
          <th>Estado</th>
          <th>Precio Diario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehiculo in listadoVehiculos" :key="vehiculo.id">
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td>{{ vehiculo.anioFabricacion }}</td>
          <td>{{ vehiculo.estado }}</td>
          <td>{{ vehiculo.precioDiario }}</td>
          <td>
            <router-link :to="{ path: '/rentar', query: { id: vehiculo.id, placa: vehiculo.placa } }"
              >Rentar</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      listadoVehiculos: [
        {
          id: 1,
          marca: "Toyota",
          modelo: "Corolla",
          placa: "ABC123",
          anioFabricacion: 2020,
          estado: "Disponible",
          precioDiario: 50,
          rentar: true,
        },
        {
          id: 2,
          marca: "Honda",
          modelo: "Civic",
          placa: "XYZ789",
          anioFabricacion: 2018,
          estado: "No Disponible",
          precioDiario: 45,
          rentar: false,
        },
        {
          id: 3,
          marca: "Ford",
          modelo: "Mustang",
          placa: "DEF456",
          anioFabricacion: 2019,
          estado: "Disponible",
          precioDiario: 60,
          rentar: true,
        },
      ],
    };
  },
  methods: {
    presionarBoton() {
      this.$emit("miEvento", this.id);
    },
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  background-color: rgb(241, 222, 198);
  border: solid 1px black;
}
.tabla {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

table {
  width: 90%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  width: calc(100% / 8);
}

th {
  background-color: #4caf50;
  color: white;
}

button {
  margin: 10px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}
</style>