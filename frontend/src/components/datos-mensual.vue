<template>
  <div>

    <h1>Datos filtrados del mes: {{ mes }}</h1>
    <input type="text" v-model="mes" placeholder="Escribe el año" />
    <button type="button" @click="traerColeccion()">datos de año deseado</button>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>

</template>

<script>
import LineChart from "./chart-mes.js";
export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      semanal: ["Patada", "Asalto en el suelo", "Persona armada"],
      reporte: false,
      DataContador: 0,
      TotalPatadas: 0,
      datosTotales: null,
      datosAsaltoEnElSuelo: 0,
      datosPatada: 0,
      datosPersonaArmada: 0,
      mes: 3
    };
  },
  mounted() {
    this.traerColeccion();
  },

  methods: {
    fillData() {
      this.datacollection = {
        labels: this.semanal,
        datasets: [
          {
            label: "Reporte Mensual",
            data: [
              this.datosPatada,
              this.datosAsaltoEnElSuelo,
              this.datosPersonaArmada
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)"
            ],
            borderWidth: 5
          }
        ]
      };
    },
    traerColeccion() {
      let self = this;
      fetch("http://localhost:4000/mostrando-casos")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          self.datosTotales = data;
          self.filtropatada();
          self.filtroAsaltoSuelo();
          self.filtroPersonaArmada();
        });
    },
    filtroAsaltoSuelo() {
      this.datosAsaltoEnElSuelo = 0;
      this.datosTotales.forEach(document => {
        if (
          document.nombre == "asalto en el suelo" &&
          document.mes == this.mes
        ) {
          console.log(document.contador);
          let contador = document.contador;
          this.datosAsaltoEnElSuelo = this.datosAsaltoEnElSuelo + contador;
          this.fillData();
        } else {
          this.data = [this.datosPatada, 0, this.datosPersonaArmada];
          this.fillData();
        }
      });
      console.log("casos de asaltos en el suelo", this.datosAsaltoEnElSuelo);
    },
    filtropatada() {
      this.datosPatada = 0;
      this.datosTotales.forEach(document => {
        if (document.nombre == "patada" && document.mes == this.mes) {
          console.log(document.contador);
          let contador = document.contador;
          this.datosPatada = this.datosPatada + contador;
          this.fillData();
        } else {
          this.data = [0, this.datosAsaltoEnElSuelo, this.datosPersonaArmada];
          this.fillData();
        }
      });

      console.log("casos de patada", this.datosPatada);
    },
    filtroPersonaArmada() {
      this.datosPersonaArmada = 0;
      this.datosTotales.forEach(document => {
        if (document.nombre == "persona armada" && document.mes == this.mes) {
          console.log(document.contador);
          let contador = document.contador;
          this.datosPersonaArmada = this.datosPersonaArmada + contador;
          this.fillData();
        } else {
          this.data = [this.datosPatada, this.datosAsaltoEnElSuelo, 0];
          this.fillData();
        }
      });

      console.log("casos de persona armada", this.datosPersonaArmada);
    }
  }
};
</script>

<style>
.borde-redondo {
  border-radius: 20px 20px 20px 20px;
  -moz-border-radius: 20px 20px 20px 20px;
  -webkit-border-radius: 20px 20px 20px 20px;
  border: 0px solid #000000;
}
</style>
