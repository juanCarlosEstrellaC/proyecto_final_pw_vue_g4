<template>
  <div>
    <router-link v-for="elemento in elementos" :key="elemento.id" :to="elemento.ruta">
      {{ elemento.text }}
    </router-link>
  </div>
</template>

<script>
export default {
    props:{
        elementos:{
            type: Array,
            required: true,
        },
    },

}
</script>

<style>

</style>