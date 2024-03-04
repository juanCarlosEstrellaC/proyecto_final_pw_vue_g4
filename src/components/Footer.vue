<template>
 <footer class="footer">
  <h1>AVIS</h1>
  <div class="footer-content">
    <div class="footer-section">
      <h5>Renta de Autos AVIS</h5>
      <p>La mejor opción para rentar autos y explorar la ciudad.</p>
    </div>
    <div class="footer-section">
      <h5>Contacto</h5>
      <p>Teléfono: +123 456 7890</p>
      <p>Email: contacto@rentaautosAvis.com</p>
    </div>
    <div class="footer-section">
      <h5>Enlaces Rápidos</h5>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
    <div class="footer-section">

  <h5>Síguenos</h5>
  <p>Encuentra nuestras últimas ofertas en nuestras redes sociales.</p>
  <a href="https://www.facebook.com/AvisEcuador/?locale=es_LA" class="social-icon">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com/Avis?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" class="social-icon">
    <i class="fab fa-twitter"></i>
  </a>
  <a href="https://www.instagram.com/avis/?hl=es" class="social-icon">
    <i class="fab fa-instagram"></i>
  </a>
</div>

  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Renta de Autos Avis. Todos los derechos reservados.</p>
  </div>
</footer>
</template>

<script>
export default {};
</script>

<style scoped>



.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
position: relative;
  min-height: 10vh;
  padding-bottom: 60px;
margin: -10px;
  width: 100;
  bottom: 0;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.footer-section {
  margin: 20px 0;
  padding-right: 80px; /* Añade un padding a la derecha para espaciar el texto de la línea */
  border-right: 1px solid #bbb; /* Añade una línea vertical a la derecha */
}

.footer-section:last-child {
  border-right: none; /* Remueve la línea del último elemento */
}

.footer-section h5 {
  margin-bottom: 15px;
  font-size: 2vmin;
}

.footer-section p, .footer-section a {
  color: #ffb0b0;
  line-height: 1.5;
}

.footer-section a {
  text-decoration: none;
}

.footer-bottom {
  color: #fff5f5;
}

ul {
  list-style: none;
  padding: 0;
}

ul li a {
  color: #ffffff;
  text-decoration: none;
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
}

.social-icon {
  margin: 0 10px;
  color: #fff; /* Cambia el color aquí según tu esquema de color */
  text-decoration: none;
  font-size: 24px; /* tamaño del ícono*/
}

.social-icon:hover {
  color: #ff7b7b; /* Cambia el color al pasar el mouse */
}
p{
  font-size: 1.5vmin;
}
</style>