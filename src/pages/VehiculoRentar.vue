<template>
  <div v-if="!reservaRealizada">
    <div class="contenedor">
      <label for="">Placa:</label>
      <input type="text" v-model="placa" readonly />
      <label for="">Cédula:</label>
      <input type="text" v-model="cedula" />
      <label for="fechaInicio">Fecha Inicio:</label>
      <input
        type="date"
        id="fechaInicio"
        v-model="fechaInicio"
        :min="fechaMinima"
      />

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
          <h3>El vehículo se encontrará disponible desde el</h3>
          <template
            v-if="
              Array.isArray(fechasDeshabilitadas) &&
              fechasDeshabilitadas.length > 0
            "
          >
            <ul>
              <li v-for="fecha in fechasUnicas" :key="fecha">
                {{ formatearFecha(fecha) }}
              </li>
            </ul>
          </template>
          <template v-else>
            <h2>No hay fechas disponibles</h2>
          </template>
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
  consultarfechasRentasPorVehiculoFachada,
  consultarReservaPorPlacaFachada,
  consultarValorTotalFachada,
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
      valorTotal: 100,
      numeroReserva: null,
      fechaDisponibilidad: null,
      formulario: false,
      fechaMinima: this.getFechaMinima(),
      fechasDeshabilitadas: [],
      miLista: null,
    };
  },
  mounted() {
    consultarfechasRentasPorVehiculoFachada(this.placa)
      .then((fechas) => {
        this.fechasDeshabilitadas = fechas;
        console.log("Fechas deshabilitadas:", fechas);
      })
      .catch((error) => {
        console.error("Error al obtener las fechas deshabilitadas:", error);
      });
  },
  computed: {
    fechasUnicas() {
      if (!Array.isArray(this.fechasDeshabilitadas)) return [];
      const conjuntoFechas = new Set(this.fechasDeshabilitadas);
      return Array.from(conjuntoFechas);
    },
  },
  methods: {
    formatearFecha(fecha) {
      const fechaObj = new Date(fecha);
      const dia =
        fechaObj.getDate() < 10 ? `0${fechaObj.getDate()}` : fechaObj.getDate();
      const mes =
        fechaObj.getMonth() + 1 < 10
          ? `0${fechaObj.getMonth() + 1}`
          : fechaObj.getMonth() + 1;
      const año = fechaObj.getFullYear();
      return `${dia} - ${mes} - ${año}`;
    },
    regresarPaginaPrincipal() {
      router.push("/renta");
    },
    async presionarBoton() {
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
        await this.fechasDisponibilidad();
        if (this.formulario) {
          const fechasEntreInicioYFin = this.obtenerFechasEntreInicioYFin();
          const fechasDeshabilitadas = this.fechasDeshabilitadas.map(
            (fecha) => new Date(fecha)
          );

          const coincidencia = fechasEntreInicioYFin.some((fecha) =>
            fechasDeshabilitadas.some(
              (deshabilitada) => fecha.getTime() === deshabilitada.getTime()
            )
          );

          if (!coincidencia) {
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
    obtenerFechasEntreInicioYFin() {
      const fechas = [];
      const inicio = new Date(this.fechaInicio);
      const fin = new Date(this.fechaFin);
      const unDia = 24 * 60 * 60 * 1000; // milisegundos en un día

      for (
        let fecha = inicio;
        fecha <= fin;
        fecha.setDate(fecha.getDate() + 1)
      ) {
        fechas.push(new Date(fecha));
      }
      return fechas;
    },
    async fechasDisponibilidad() {
      const listaFechas = await consultarfechasRentasPorVehiculoFachada(
        this.placa
      );
      console.log(listaFechas);
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
</style>