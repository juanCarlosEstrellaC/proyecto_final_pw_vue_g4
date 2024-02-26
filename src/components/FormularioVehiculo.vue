<template>
  <div class="container">
    <div class="form-post">
      <p type="Placa:">
        <input type="text" id="idPlaca" placeholder="Placa" v-model="placa" />
      </p>
      <p type="Modelo:">
        <input
          type="text"
          id="idModelo"
          placeholder="Modelo"
          v-model="modelo"
        />
      </p>
      <p type="Marca:">
        <input type="text" id="idMarca" placeholder="marca" v-model="marca" />
      </p>
      <p type="Año de fabricación:">
        <input
          type="datetime-local"
          id="idAnioFabricacion"
          placeholder="Año"
          v-model="aniofab"
        />
      </p>
      <p type="País fabricación:">
        <input
          type="text"
          id="idPaisFab"
          placeholder="Pais"
          v-model="pasifab"
        />
      </p>
      <p type="Cilindraje:">
        <input
          type="number"
          id="idCilindraje"
          placeholder="Cilindraje"
          v-model="cilindraje"
        />
      </p>
      <p type="Avalúo:">
        <input
          type="number"
          id="idAvaluo"
          placeholder="Avalúo"
          v-model="avaluo"
        />
      </p>
      <p type="Valor por día:">
        <input
          type="number"
          name=""
          id="idValorDia"
          placeholder="Valor dia"
          v-model="valor"
        />
      </p>
      <button @click="selectMethod">{{ txtBtn }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormularioVehiculo",
  props: {
    txtBtn: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      placa: null,
      modelo: null,
      marca: null,
      aniofab: null,
      pasifab: null,
      cilindraje: null,
      avaluo: null,
      valor: null,
    };
  },
  methods: {
    async selectMethod() {
      switch (this.txtBtn) {
        case "Guardar":
          await this.insertar();
          this.restaurar();
          break;
        case "Actualizar":
          await this.actualizar();
          this.restaurar();
          break;
      }
    },
    async insertar() {
      console.log("SE INSERTÓ");
      console.log(this.placa);
      console.log(this.modelo);
      console.log(this.marca);
    },
    async actualziar() {
      console.log("SE ACTUALIZÓ");
      console.log(this.placa);
      console.log(this.modelo);
      console.log(this.marca);
    },
    restaurar() {
      this.placa = null;
      this.modelo = null;
      this.marca = null;
      this.aniofab = null;
      this.pasifab = null;
      this.cilindraje = null;
      this.avaluo = null;
      this.valor = null;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.divisiones {
  display: grid;
  grid-template-columns: repeat(2, 500px);
}

.form-post {
  width: 340px;
  height: 600px;
  background-color: #d59393;
  border-radius: 8px;
  padding: 20px 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0 0 50px -18px #000;
}

.form-get {
  width: 340px;
  height: 700px;
  background-color: #71a9c8;
  border-radius: 8px;
  padding: 20px 30px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  box-shadow: 0 0 50px -18px #000;
}
p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 17px;
  color: #5a5a5a;
}
</style>