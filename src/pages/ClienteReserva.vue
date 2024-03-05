<template>
<NavBarVue/>
  <VehiculoRentarVue/>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue'
import VehiculoRentarVue from './VehiculoRentar.vue'
import {
  consultarClientePorCIFachada,
  consultarValorTotalFachada,
  guardarRentaFachada,
} from "@/helpers/clienteCliente";
export default {
    components:{
        VehiculoRentarVue,NavBarVue
    }

}
</script>

<style>

</style>