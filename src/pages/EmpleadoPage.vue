<template>
  
  <NavBarEmpleadoVue />
   <router-view />  
   <h1>Empleados</h1>
   
  <div class="princ">
<img src="@/assets/cabeceraemp.jpg" alt="">

  </div>
  
  
  <Footer/>
</template>

<script>
import NavBarEmpleadoVue from '@/components/NavBarEmpleado.vue'



export default {

name: 'EmpleadoPage',
  components: {
   NavBarEmpleadoVue
  },
  data(){

    return{

    
    }
  }
}
</script>

<style>
.princ img{

  width: 60%;
  height: 500px;
}
</style>