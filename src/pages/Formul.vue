<template>
  <div>
    <!-- Tu contenido HTML que quieres convertir a PDF -->

    <div ref="pdfContent">
      <h1>Mi Documento PDF</h1>
      <p>Contenido del PDF...</p>
    </div>

    <!-- Botón para generar el PDF -->
    <button @click="generarPDF">Generar PDF</button>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  methods: {
    generarPDF() {
      const content = this.$refs.pdfContent;

      html2pdf(content);
    },
  },
};
</script>