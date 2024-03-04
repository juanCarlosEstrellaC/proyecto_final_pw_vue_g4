<template>
  <NavBarInicioVue/>
  <router-view />
  <div class="inicio">
    <div @click="clientes" class="clientes">
      <img src="https://www.esic.edu/sites/default/files/styles/full/public/rethink/580280b3-atencion-al-cliente-y-servicio-al-cliente.jpg?itok=REGLgDj2" alt="">
      <div class="texto-superpuesto">
        <p>CLIENTES</p>
      </div>
    </div>
    <div @click="empleado" class="empleados">
      <img src="https://emprendedores.es/wp-content/uploads/un-empleado-se-va-de-tu-empresa-hazle-una-entrevista-de-salida-optimized.jpg" alt="">
      <div class="texto-superpuesto">
        <p>EMPLEADOS</p>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarInicioVue from '@/components/NavBarInicio.vue';

export default {
  components: {
    NavBarInicioVue
  },
  methods: {
    clientes() {
      this.$router.replace('/clientes');
    },
    empleado() {
      this.$router.replace('/empleados');
    }
  }
};
</script>
 
<style>
.inicio {
  display: flex;
}

.clientes,
.empleados {
  width: 50%;
  position: relative;
  overflow: hidden; /* Para que el overlay no se desborde */
}

.clientes img,
.empleados img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Para asegurar que la imagen cubra el contenedor */
  transition: transform 0.3s ease;
}

.texto-superpuesto {
  position: absolute;
  top: 50%; /* Lo posiciona verticalmente en la mitad */
  left: 50%; /* Lo posiciona horizontalmente en la mitad */
  transform: translate(-50%, -50%); /* Centra el texto */
  background-color: rgba(7, 7, 7, 0.194); /* Fondo semi-transparente */
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  opacity: 0; /* Inicialmente transparente */
  transition: opacity 0.3s ease;
}

.texto-superpuesto p {
  font-size: 7vmin;
  font-weight: bold;
  text-align: center;
  
  margin: 20px;
  padding: 0;
  
}

/* Mostrar texto al pasar el ratón */
.clientes:hover .texto-superpuesto,
.empleados:hover .texto-superpuesto {
  opacity: 1; /* Hace visible el texto */
}

/* Efecto de aumento al pasar el ratón */
.clientes:hover img,
.empleados:hover img {
  transform: scale(1.1); /* Aumenta tamaño al 110% */
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
}



</style>
