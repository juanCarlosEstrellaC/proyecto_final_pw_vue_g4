<template>
  <div class="no-found">
   <!--
    <h1>Error</h1>
    <p>¡Lo siento, la página que estás buscando no existe!</p>
    <p>Parece que has introducido una URL incorrecta.</p>

 
    <video controls autoplay muted>
      <source src="../assets/AVISVideo.mp4" type="video/mp4" />
    </video>
    -->
    <img src="../assets/NOT.gif" alt="img de error 404">
  </div>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
     
    };
  },
};
</script>

<style>
.no-found {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 24px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}

iframe {
  width: 560px;
  height: 315px;
  margin: 20px auto;
}
</style>
