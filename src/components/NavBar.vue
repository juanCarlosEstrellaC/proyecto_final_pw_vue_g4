<template>

<img src="https://payload.cargocollective.com/1/5/176144/6655422/Pulling%20out%20no%20FPO_o.jpg" class="imagen-header" alt="header">
    <header >
  
      <Menubar :model="items" class="custom-menubar">
         <template #start>
            <h3>Clientes</h3>
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
    name:'NavBar',

  components: {
    Menubar
  },data() {
    return {
      items: [
        {
          label: 'Registro',
          icon: 'pi pi-fw pi-home',
          command: () => {
            this.$router.push('/registro');
          }
        },
        {
          label: 'Actualizacion de datos',
          icon: 'pi pi-fw pi-chart-bar',
          command: () => {
            this.$router.push('/actualizar');
          }
        }, {
          label: 'Buscar un auto',
          icon: 'pi pi-fw pi-home',
          command: () => {
            this.$router.push('/renta');
          }
        },
        
        
      ]
    };
  }

}
</script>

<style >


</style>