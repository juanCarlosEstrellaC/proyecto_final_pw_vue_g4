<template>
  
  <NavBarEmpleadoVue />
   <router-view />  
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

</style>