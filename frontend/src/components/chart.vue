<template>
  <div>
    <div class="bg-dark m-b-10">
      <div class="container">
        <div class="row p-b-50 p-t-20">
          <div class="col-md-6 text-white p-b-0">
            <div class="media">
              <div class="media-body">
                <!-- <h1 class="ml-4">Estadisticas</h1> -->
                <!-- <p
                  class="opacity-75 ml-3"
                >Aqui encontraras datos Estadisticos de situaciones violentas en los ultimos años</p>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class>
            <div class="card">
              <div class="card-body">
                <div class="chart">
                  <h2 class="text-center white--text  ">Reporte Anual</h2>
                  <line-chart :chart-data="datacollection" class="white--text"></line-chart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class>
            <div class="card">
              <div class="card-body">
                <div class="chart">
                  <h2 class="text-center white--text">Reporte Mensual</h2>
                  <semanal></semanal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "./chart-total.js";
import semanal from "@/components/datos-mensual.vue";
export default {
  components: {
    LineChart,
    semanal
  },
  data() {
    return {
      datacollection: null,
      collection: null,
      mensual: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      enero: 0,
      febrero: 0,
      marzo: 0,
      abril: 0,
      mayo: 0,
      junio: 0,
      julio: 0,
      agosto: 0,
      septiembre: 0,
      octubre: 0,
      noviembre: 0,
      diciembre: 0
    };
  },
  mounted() {
    this.fillData();
    this.traerColeccion();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.mensual,
        datasets: [
          {
            label: "Reporte Anual",
            data: [
              this.enero,
              this.febrero,
              this.marzo,
              this.abril,
              this.mayo,
              this.junio,
              this.julio,
              this.agosto,
              this.septiembre,
              this.octubre,
              this.noviembre,
              this.diciembre
            ],
            backgroundColor: [
              "rgba(0, 0, 255, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)"
            ],
            borderColor: [
              "rgba(8, 29, 80, 1)",
              "rgba(255, 155, 0, 1)",
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
          self.collection = data;
          console.log(self.collection);

          self.eneroData();
          self.febreroData();
          self.marzoData();
          self.abrilData();
          self.mayoData();
          self.junioData();
          self.agostoData();
          self.septiembreData();
          self.octubreData();
          self.noviembreData();
          self.diciembreData();
        });
    },
    eneroData() {
      this.enero = 0;
      this.collection.forEach(document => {
        if (document.mes == 1) {
          console.log(document.contador);
          let contador = document.contador;
          this.enero = this.enero + contador;
          this.fillData();
        } else {
          this.data = [
            0,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en enero", this.enero);
    },
    febreroData() {
      this.febrero = 0;
      this.collection.forEach(document => {
        if (document.mes == 2) {
          console.log(document.contador);
          let contador = document.contador;
          this.febrero = this.febrero + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            0,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en febrero", this.febrero);
    },
    marzoData() {
      this.marzo = 0;
      this.collection.forEach(document => {
        if (document.mes == 3) {
          console.log(document.contador);
          let contador = document.contador;
          this.marzo = this.marzo + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            0,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en marzo", this.marzo);
    },
    abrilData() {
      this.abril = 0;
      this.collection.forEach(document => {
        if (document.mes == 4) {
          console.log(document.contador);
          let contador = document.contador;
          this.abril = this.abril + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            0,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en abril", this.abril);
    },
    mayoData() {
      this.mayo = 0;
      this.collection.forEach(document => {
        if (document.mes == 5) {
          console.log(document.contador);
          let contador = document.contador;
          this.mayo = this.mayo + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            0,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en mayo", this.mayo);
    },
    junioData() {
      this.junio = 0;
      this.collection.forEach(document => {
        if (document.mes == 6) {
          console.log(document.contador);
          let contador = document.contador;
          this.junio = this.junio + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            0,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en junio", this.junio);
    },
    julioData() {
      this.julio = 0;
      this.collection.forEach(document => {
        if (document.mes == 7) {
          console.log(document.contador);
          let contador = document.contador;
          this.julio = this.julio + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            0,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en julio", this.julio);
    },
    agostoData() {
      this.agosto = 0;
      this.collection.forEach(document => {
        if (document.mes == 8) {
          console.log(document.contador);
          let contador = document.contador;
          this.agosto = this.agosto + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            0,
            this.septiembre,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en agosto", this.agosto);
    },
    septiembreData() {
      this.septiembre = 0;
      this.collection.forEach(document => {
        if (document.mes == 9) {
          console.log(document.contador);
          let contador = document.contador;
          this.septiembre = this.septiembre + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            0,
            this.octubre,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en septiembre", this.septiembre);
    },
    octubreData() {
      this.octubre = 0;
      this.collection.forEach(document => {
        if (document.mes == 10) {
          console.log(document.contador);
          let contador = document.contador;
          this.octubre = this.octubre + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            0,
            this.noviembre,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en octubre", this.octubre);
    },
    noviembreData() {
      this.noviembre = 0;
      this.collection.forEach(document => {
        if (document.mes == 11) {
          console.log(document.contador);
          let contador = document.contador;
          this.noviembre = this.noviembre + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            0,
            this.diciembre
          ];
          this.fillData();
        }
      });
      console.log("casos en noviembre", this.noviembre);
    },
    diciembreData() {
      this.diciembre = 0;
      this.collection.forEach(document => {
        if (document.mes == 6) {
          console.log(document.contador);
          let contador = document.contador;
          this.diciembre = this.diciembre + contador;
          this.fillData();
        } else {
          this.data = [
            this.enero,
            this.febrero,
            this.marzo,
            this.abril,
            this.mayo,
            this.junio,
            this.julio,
            this.agosto,
            this.septiembre,
            this.octubre,
            this.noviembre,
            0
          ];
          this.fillData();
        }
      });
      console.log("casos en diciembre", this.diciembre);
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