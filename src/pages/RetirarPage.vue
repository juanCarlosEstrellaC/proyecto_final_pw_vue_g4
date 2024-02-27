<template>
  <div class="container">
    <h1>Retirar vehiculo reservado</h1>
    <label for="">Numero de reserva</label>
    <input type="text" name="" id="" v-model="nReserva" />
   
    <button  @click="buscarRetiroPorNReserva">Buscar reservas</button>
    <div v-show="mostrarTabla" class="tablaRetiro" >
   <table v-if="datos.length > 0">
  <tr>
    <th>Placa</th>
    <th>Modelo</th>
    <th>Estado</th>
    <th>Fecha</th>
    <th>Reservado por</th>
  </tr>
  <tr>
    <td >{{placa}}</td>
    <td>{{modelo}}</td>
    <td>{{estado}}</td>
    <td>{{fechaReserva}}</td>
    <td>{{reservadoPor}}</td>
  </tr>
</table>
 <p v-else>No hay datos para mostrar</p>
<button @click="retirarAuto">Retirar auto</button>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nReserva: null,
      placa:null,
      modelo:null,
      estado:null,
      fechaReserva:null,
      reservadoPor:null,
      estadoReserva:null,
      mostrarTabla:false
    };
  },
  methods: {
    async buscarRetiroPorNReserva() {
       this.mostrarTabla=true;
      await this.buscarRetiro(this.nReserva);
      
        
      
     
    },

    async buscarRetiro(nReserva) {
      //const data = await consultarRetiroFachada(nReserva);
     // console.log(data);
      this.placa="155";
      this.modelo="prius";
        this.estado="Disponible";
        this.fechaReserva="10/04/2024-11/04/2024";
        this.reservadoPor="17021321";
    },

    async retirarAuto(){
        await this.actualizarReserva(this.nReserva);
    },

    async actualizarReserva(nReserva){
     
     const body = {
     estado:"ND",
        estadoReserva:"Ejecutada"
      };
      //solo para probar
      this.estado="ND"
            // await actualizarRetiroFachada(this.nReserva,body);
    }
  },
};
</script>

<style>
table{
    display: grid;
    align-content: center;
    justify-content: center;
}
</style>