<template>
 <header>
  <NavBar />
  <router-view />
  </header>
  <img src="https://avis.com.ec/wp-content/uploads/2023/12/post1.png" alt="">
<section>
  
  <div class="container">

  <h1>Misión y valores</h1>
  <h2>Nuestra visión</h2>
  <label>"Dirigiremos nuestra industria al defender la excelencia del servicio y forjando una lealtad incomparable de parte de los clientes." </label>
   <h2>
Nuestra misión </h2>
 
  <label>"Garantizaremos una experiencia de alquiler libre de complicaciones, ya que proporcionaremos servicios superiores que satisfagan las necesidades individuales de nuestros clientes... además de que siempre aplicaremos nuestro lema “Nos esforzamos más®” con sabiduría, dedicación y pasión por la excelencia."</label>
</div>
</section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  components:{
    NavBar,
  }
}
</script>

<style>

</style>