<template>
  <line-chart :chart-data="datacollection"></line-chart>
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
      semanal: ["Puñetazos", "Patadas", "Ahorcamiento", "Apunte de Pistola"],
      reporte: false,
      DataContador: 0,
      TotalPatadas: 0,
      datosAnuales: []
    };
  },
  created() {
    this.fillData();
    this.getDatosPatada();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.semanal,
        datasets: [
          {
            label: "Reporte Mensual",
            data: [10, this.TotalPatadas, 10, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 5
          }
        ]
      };
    },
    getDatosPatada() {
      fetch("http://localhost:4000/mostrando-casos")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          this.datosAnuales = data;
        });

      this.DataContador = this.datosAnuales.filter(function(dato) {
          //aplicando el filtro para obtener los valores exactos
          return dato.mes == "Febrero" && dato.nombre !="Patada";
        })
        .map(function(dato) {
          return dato.contador;
        });
      let suma = 0;
      //for lop para sumar los datos que obtenemos de this.DataContador
      for (let i = 0; i < this.DataContador.length; i++) {
        suma = suma + this.DataContador[i];
      }
      this.TotalPatadas = suma;
      this.fillData(); //ejecuto esta funcion para que se actualize el grafico
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
