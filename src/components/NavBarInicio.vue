<template>

<img src="https://payload.cargocollective.com/1/5/176144/6655422/Pulling%20out%20no%20FPO_o.jpg" class="imagen-header" alt="header">
    <header >
  
      <Menubar :model="items" class="custom-menubar">
          <template #start>
          
          <router-link :to="{ path: '/' }" class="menu-link">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Avis_logo.svg" alt="Logo" class="logo">
         </router-link>

        </template>
          <template #end>
           <h3>Rent a car</h3>
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
h2{
   
    margin-top:55px;
    font-size: 8vmin;
    margin-right: 50px;
}
</style>