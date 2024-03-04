<template>

<img src="https://payload.cargocollective.com/1/5/176144/6655422/Pulling%20out%20no%20FPO_o.jpg" class="imagen-header" alt="header">
    <header >
  
      <Menubar :model="items" class="custom-menubar">
         <template #start>
          <router-link :to="{ path: '/empleados' }" class="menu-link">
            <h3 >Empleados</h3>
            </router-link>
        </template>
        <template #end>
          <router-link :to="{ path: '/' }" class="menu-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Avis_logo.svg" alt="Logo" class="logo">
         </router-link>
        </template>
      </Menubar>
  
    </header>



</template>

<script>

import Menubar from 'primevue/menubar';
export default {
 

  components: {
    Menubar
  },data() {
    return {
      items: [
        {
          label: 'Cliente',
          icon: 'pi pi-fw pi-user',

           items:[{
             label: 'Registrar Cliente',
          
          command: () => {
            this.$router.push('/empleados/clientes/registro');
          }},{
          label: 'Buscar Cliente',
          
          command: () => {
            this.$router.push('/empleados/clientes/busqueda');
          }

          }
          ]
        },
        {
          label: 'Vehículo',
          icon: 'pi pi-fw pi-chart-bar',
          items:[{
             label: 'Nuevo Vehículo',
          
          command: () => {
            this.$router.push('/empleados/vehiculo/ingreso');
          }},{
          label: 'Buscar Vehículo',
        
          command: () => {
            this.$router.push('/empleados/vehiculo/busqueda');
          }

          }
          ]
          
        }, {
          label: 'Reserva',
          icon: 'pi pi-fw pi-home',
          items:[{
             label: 'Retiro con reserva',
          
          command: () => {
            this.$router.push('/empleado/reserva/retiro');
          }},{
          label: 'Retiro sin reserva',
        
          command: () => {
            this.$router.push('/empleado/reserva/sinreserva');
          }

          }
          ]
        },{
          label: 'Reportes',
          icon: 'pi pi-fw pi-home',
          
        
           command: () => {
            this.$router.push('/empleados/reportes');
          }
          

          
          
        }
      ]
    };
  }

}
</script>

<style scoped>
.imagen-header{
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

@media screen and (max-width:825px){
  
   
  
    .imagen-header{
        height: 100%;
    }

    
}

</style>