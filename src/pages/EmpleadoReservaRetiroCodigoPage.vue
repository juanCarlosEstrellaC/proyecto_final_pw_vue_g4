<template>
  
<h1>Ingrese el codigo de la reserva</h1>
    <input type="text" v-model="apellidoid" placeholder="COD1234"/>
    <button @click="consultarPorApellido">Buscar</button>

 <div v-if="valida">
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Modelo</th>
            <th>Fecha</th>
            <th>Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reserva in valores" :key="reserva.id">
            <td>{{ reserva.placa }}</td>
            <td>{{ reserva.modelo }}</td>
            <td>{{ reserva.fecha }}</td>
            <td>{{ reserva.cliente }}</td>
            <td>
              <button @click="retirar(id)">Retiro</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


</template>

<script>
export default {

    name:'EmpleadoReservaRetiroCodigoPage',

    data(){

        return{

            valida: false,
            valores:[],
            nombre: null,
            placa:null,


        }
    },


}
</script>

<style>

</style>