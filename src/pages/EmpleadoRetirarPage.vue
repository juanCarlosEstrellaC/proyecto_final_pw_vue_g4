<template>
  <div class="container">
    <h1>Retirar vehiculo reservado</h1>
  
      <div class="center-input">
      <FloatLabel>
        <InputText id="numeroReserva" v-model="nReserva"/>
        <label for="numeroReserva">Numero de reserva</label>
        
      </FloatLabel>
      <Button @click="buscarRetiroPorNReserva" severity="info" text raised  label="Buscar reservas" />
    </div>
    
    <div  class="tabla" v-show="mostrarTabla" v-if="datos.length > 0">
       <DataTable :value="datos">
        <Column field="placa" header="Placa"></Column>
        <Column field="modelo" header="Modelo"></Column>
        <Column field="estado" header="Estado"></Column>
        <Column field="fechaReserva" header="Fecha"></Column>
        <Column field="reservadoPor" header="Reservado por"></Column>
      </DataTable>
      
      
       <Button @click="retirarAuto()"  severity="info" label="Retirar auto"  />
    </div>
    <p v-else>No hay datos para mostrar</p>
  </div>
</template>

<script>
import { actualizarRetiroFachada, consultarReservaFachada } from '@/helpers/clienteEmpleado';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
export default {
components: {
    DataTable,
    Column,Button,InputText,FloatLabel

  },
  data() {
    return {
      nReserva: '', 
      datos: [], 
      mostrarTabla: false
    };
  },
  methods: {
    async buscarRetiroPorNReserva() {
      this.mostrarTabla = true;
      await this.buscarRetiro(this.nReserva);
    },
    async buscarRetiro(nReserva) {
    const resultadoConsulta  = await consultarReservaFachada(nReserva);
    console.log(resultadoConsulta);
   
     
      const data = [
        {
         
          placa: resultadoConsulta.placa,
          modelo: resultadoConsulta .modelo,
          estado: resultadoConsulta .estado,
          fechaReserva: resultadoConsulta .fechaReserva,
          reservadoPor: resultadoConsulta .reservadoPor
        }
      ];
      this.datos = data;
    },
    async retirarAuto() {
      // Aquí puedes implementar la lógica para retirar el auto
      // Por ahora, simplemente limpiaremos los datos de la reserva

      await actualizarRetiroFachada(this.nReserva);
      this.datos = [];
      this.mostrarTabla = false;
    }
  }
};

</script>

<style>


</style>
