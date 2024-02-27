<template>
  <h1>Reporte de reservas</h1>
  <label for="">Fecha inicio</label>
  <input type="date" name="" id="" v-model="fechaInicio" />
  <label for="">Fecha fin</label>
  <input type="date" name="" id="" v-model="fechaFin" />
  <button @click="buscarReservas">Buscar reservas</button>

  <table v-if="mostrarTabla">
    <tr>
      <td class="cab"><label for="">Nombre</label></td>
      <td class="cab"><label for="">Apellido</label></td>
      <td class="cab"><label for="">Placa</label></td>
      <td class="cab"><label for="">Marca</label></td>
      <td class="cab"><label for="">Modelo</label></td>
      <td class="cab"><label for="">Nro. Reserva</label></td>
      <td class="cab"><label for="">Dias Reserva</label></td>
      <td class="cab"><label for="">Inicio</label></td>
      <td class="cab"><label for="">Fin</label></td>
      <td class="cab"><label for="">Estado</label></td>
    </tr>
    <tr
      class="cab"
      v-for="(
        {
          nombreCliente,
          apellidoCliente,
          placaAuto,
          marcaAuto,
          modeloAuto,
          nReserva,
          diasReserva,
          reservaInicio,
          reservaFin,
          estado,
        },
        index
      ) in lista"
      :key="index"
    >
      <td>
        <label for="">{{ nombreCliente }}</label>
      </td>
      <td>
        <label for="">{{ apellidoCliente }}</label>
      </td>
      <td>
        <label for="">{{ placaAuto }}</label>
      </td>
      <td>
        <label for="">{{ marcaAuto }}</label>
      </td>
      <td>
        <label for="">{{ modeloAuto }}</label>
      </td>
      <td>
        <label for="">{{ nReserva }}</label>
      </td>
      <td>
        <label for="">{{ diasReserva }}</label>
      </td>
      <td>
        <label for="">{{ reservaInicio }}</label>
      </td>
      <td>
        <label for="">{{ reservaFin }}</label>
      </td>
      <td>
        <label for="">{{ estado }}</label>
      </td>
    </tr>
  </table>
   <p v-else>No hay datos para mostrar</p>
</template>

<script>
export default {
  
  data() {
    return {
      fechaInicio: null,
      fechaFin: null,

      nombreCliente: null,
      apellidoCliente: null,
      placaAuto: null,
      modeloAuto: null,
      marcaAuto: null,
      numeroReserva: null,
      diasReserva: null,
      reservaInicio: null,
      reservaFin: null,
      reservaEstado: null,

      lista:[],

      mostrarTabla:false
    };
  },
  methods:{

    async buscarReservas(fechaInicio,fechaFin){

       // await consultarReservasFachada(fechaInicio,fechaFin);
        this.lista=[
        {
          nombreCliente: 'Juan',
          apellidoCliente: 'Perez',
          placaAuto: 'ABC123',
          marcaAuto: 'Toyota',
          modeloAuto: 'Corolla',
          nReserva: '123456',
          diasReserva: '5',
          reservaInicio: '2024-02-20',
          reservaFin: '2024-02-25',
          estado: 'Confirmada',
        },
        {
          nombreCliente: 'María',
          apellidoCliente: 'González',
          placaAuto: 'XYZ789',
          marcaAuto: 'Honda',
          modeloAuto: 'Civic',
          nReserva: '789012',
          diasReserva: '3',
          reservaInicio: '2024-02-22',
          reservaFin: '2024-02-25',
          estado: 'Pendiente',
        },
        ];

        if(this.lista.length>0){
            this.mostrarTabla=true;
        }
    }
  }
};
</script>

<style>
</style>