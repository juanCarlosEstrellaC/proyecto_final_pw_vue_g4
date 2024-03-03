<template>
  <div class="arriba">
    <h1>Rentar Vehículo</h1>
    <div class="contenedor">
      <label for="">Marca:</label>
      <input type="text" v-model="marca" />
      <label for="">Modelo:</label>
      <input type="text" v-model="modelo" />
      <button @click="buscar">Buscar</button>
    </div>
  </div>
  <div class="tabla" v-if="existeBusqueda">
    <table>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
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
          <td>{{ vehiculo.estado }}</td>
          <td>{{ vehiculo.renta }}</td>
          <td>
            <router-link class="j"
              :to="{
                path: '/rentar',
                query: {
                  id: vehiculo.id,
                  placa: vehiculo.placa,
                  estado: vehiculo.estado,
                  marca: vehiculo.marca,
                  modelo: vehiculo.modelo,
                },
              }"
              >Rentar</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarVehiculoPorMarcaYModeloFachada } from "@/helpers/clienteCliente";
export default {
  data() {
    return {
      id: null,
      existeBusqueda: false,
      listadoVehiculos: [],
      marca: null,
      modelo: null,
    };
  },
  methods: {
    async buscar() {
      this.existeBusqueda = true;
      this.listadoVehiculos = await consultarVehiculoPorMarcaYModeloFachada(
        this.marca,
        this.modelo
      );
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

.j {
  padding: 10px 20px; 
  font-size: 16px; 
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}
.tabla {
  position: relative;
  margin: 20px;
  overflow: hidden;
}

.encabezado {
  position: absolute;
  top: 0;
  width: 100%;
}

.cuerpo {
  overflow-y: auto;
  max-height: 350px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  width: 14.28%;
}

th {
  background-color: #4caf50;
  color: white;
}

button {
  margin: 25px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}

label {
  margin-top: 10px;
}

input {
  margin: 5px;
  text-align: center;
}
</style>