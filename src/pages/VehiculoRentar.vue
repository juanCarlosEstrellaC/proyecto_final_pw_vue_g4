<template>
  <div v-if="!reservaRealizada">
    <div class="contenedor">
      <label for="">Placa:</label>
      <input type="text" v-model="placa" readonly />
      <label for="">Cédula:</label>
      <input type="text" v-model="cedula" />
      <label for="fechaInicio">Fecha Inicio:</label>
      <input type="date" v-model="fechaInicio" :min="fechaMinima" />
      <label for="">Fecha Fin:</label>
      <input type="date" v-model="fechaFin" :min="fechaMinima" />

      <button @click="presionarBoton">Verificar Disponibilidad</button>
    </div>

    <div class="mensajes" v-if="imprimirMenjajes">
      <div>
        <div v-if="vehiculoDisponible" class="mensajeOk">
          <h3>Vehículo Disponible</h3>
          <h5>Es posible rentar el vehículo</h5>
          <h4>El valor total a pagar es:</h4>
          <h2>$ {{ valorTotal }}</h2>
          <label for="">Ingrese su Número Tarjeta de Crédito:</label>
          <input type="number" v-model="tarjeta" />
          <button @click="reservar">Reservar</button>
        </div>
        <div v-else class="mensajeBad">
          <h3>Vehículo No Disponible</h3>
          <h5>No es posible rentar el vehículo en las fechas solicitadas.</h5>
          <h3>El vehículo se no se encontrará disponible las siguientes fechas:</h3>
          <ul class="uli">
            <li v-for="fecha in fechasFormateadas" :key="fecha">{{ fecha }}</li>
          </ul>
          <h5>Por favor, cambie las fechas e intente nuevamente.</h5>
          <button @click="cambiarFechas">Cambiar fechas</button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="reservaCorrecta">
    <h1>Vehículo Reservado con éxito</h1>
    <h3>Estimado usuario, se ha generado el número de reserva:</h3>
    <h2>{{ numeroReserva }}</h2>

    <h4>Para el vehículo:</h4>
    <p>
      <span><strong>Marca:</strong> {{ marca }}</span
      ><br />
      <span><strong>Modelo:</strong> {{ modelo }}</span
      ><br />
      <span><strong>Placa:</strong> {{ placa }}</span>
    </p>
    <h4>El periodo de vigencia de la renta es:</h4>
    <p>
      <span><strong>Fecha de Inicio:</strong> {{ fechaInicio }}</span
      ><br />
      <span><strong>Fecha de Fin:</strong> {{ fechaFin }}</span>
    </p>
    <button @click="regresarPaginaPrincipal">Aceptar</button>
  </div>
</template>

<script>
import {
  consultarClientePorCIFachada,
  consultarReservaPorPlacaFachada,
  consultarValorTotalFachada,
  consultarfechasRentasPorVehiculoFachada,
  guardarRentaFachada,
} from "@/helpers/clienteCliente";
import router from "@/router/router";
export default {
  data() {
    return {
      placa: this.$route.query.placa,
      cedula: "1234567890",
      fechaInicio: "2024-03-05",
      fechaFin: "2024-03-06",
      estado: this.$route.query.estado,
      marca: this.$route.query.marca,
      modelo: this.$route.query.modelo,
      imprimirMenjajes: false,
      vehiculoDisponible: false,
      reservaRealizada: false,
      tarjeta: null,
      valorTotal: null,
      numeroReserva: null,
      fechaDisponibilidad: null,
      formulario: false,
      fechaMinima: this.getFechaMinima(),
      lasFechas: [
        "2024-03-06",
        "2024-03-07",
        "2024-03-08",
        "2024-03-09",
        "2024-03-10",
        "2024-03-11",
        "2024-03-12",
        "2024-03-13",
        "2024-03-14",
        "2024-03-14",
      ],
    };
  },
  created(){
    this.lasFechas = consultarfechasRentasPorVehiculoFachada(this.placa);
    console.log(this.lasFechas);
  },
  // computed: {
  //   fechasFormateadas() {
  //     return this.lasFechas.map(fecha => {
  //       const partesFecha = fecha.split('-');
  //       const dia = parseInt(partesFecha[2]);
  //       const numeroMes = parseInt(partesFecha[1]);
  //       const mesesNombres = {
  //         1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo',
  //         6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre', 10: 'Octubre',
  //         11: 'Noviembre', 12: 'Diciembre'
  //       };
  //       const mes = mesesNombres[numeroMes];
  //       const anio = partesFecha[0];
  //       return `${dia} de ${mes} del ${anio}`;
  //     });
  //   }
  // },
  methods: {
    async presionarBoton() {
      console.log(this.lasFechas);
      if (!this.placa || !this.cedula || !this.fechaInicio || !this.fechaFin) {
        alert(
          "Por favor, completa todos los campos antes de verificar la disponibilidad."
        );
      } else if (this.fechaFin < this.fechaInicio) {
        alert(
          "¡Error de fecha!\n\n¿Intentando viajar en el tiempo?\nLa fecha de fin no puede ser anterior a la fecha de inicio.\nCambia las fechas para rentar un vehículo"
        );
        this.cambiarFechas();
      } else {
        await this.buscarCedula();

        if (this.formulario) {
          if (true) {
            this.vehiculoDisponible = true;
            const cotizacion = {
              placa: this.placa,
              fechaInicio: this.fechaInicio,
              fechaFin: this.fechaFin,
            };
            this.valorTotal = await consultarValorTotalFachada(cotizacion);
          } else {
            this.vehiculoDisponible = false;
            const res = await consultarReservaPorPlacaFachada(this.placa);
            console.log(res);
            this.fechaDisponibilidad = res.fechaFin;
          }
          this.imprimirMenjajes = true;
        } else {
          alert(
            "Se produjo un error al buscar la cédula. Por favor, ingrese una cédula válida."
          );
        }
      }
    },
    async buscarCedula() {
      try {
        const c = await consultarClientePorCIFachada(this.cedula);
        console.log(c);
        if (c !== null) {
          this.formulario = true;
        } else {
          this.formulario = false;
          alert("Cédula no encontrada, por favor inténtelo de nuevo.");
        }
      } catch (error) {
        alert(
          "Se produjo un error al buscar la cédula. Por favor, ingrese una cédula válida."
        );
      }
    },
    cambiarFechas() {
      this.fechaInicio = null;
      this.fechaFin = null;
      this.imprimirMenjajes = false;
    },
    async reservar() {
      const renta = {
        placa: this.placa,
        cedula: this.cedula,
        tarjeta: this.tarjeta,
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
      };

      const reserva = await guardarRentaFachada(renta);
      console.log(reserva);
      console.log(reserva.numeroReserva);
      this.numeroReserva = reserva.numeroReserva;
      this.reservaRealizada = true;
    },
    getFechaMinima() {
      const hoy = new Date();
      const mes =
        hoy.getMonth() + 1 < 10 ? `0${hoy.getMonth() + 1}` : hoy.getMonth() + 1;
      const dia = hoy.getDate() < 10 ? `0${hoy.getDate()}` : hoy.getDate();
      return `${hoy.getFullYear()}-${mes}-${dia}`;
    },
  },
  regresarPaginaPrincipal() {
    router.push("/renta");
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  width: 300px;
  background-color: rgb(241, 222, 198);
  border: solid 1px black;
}

.mensajeOk {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  background-color: rgb(138, 224, 95);
  border: solid 1px black;
}
.mensajeBad {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 300px;
  background-color: rgb(224, 149, 95);
  border: solid 1px black;
}

.reservaCorrecta {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
  width: 40%;
  background-color: rgb(101, 224, 95);
  border: solid 1px black;
}

.mensajeOk label,
input,
button {
  margin-bottom: 30px;
}
button {
  margin: 30px;
  background-color: rgb(255, 206, 127);
  border: solid 1px black;
}

label {
  margin-top: 10px;
}

input {
  margin: 5px;
  text-align: center;
}
li {
  list-style-type: none; 
  
}
</style>