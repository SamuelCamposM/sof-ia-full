<template>
<div>
    <div class="bg-dark m-b-10">
        <div class="container">
            <div class="row p-b-50 p-t-20">
                <div class="col-md-6 text-white p-b-0">
                    <div class="media">
                        <div class="media-body">
                            <h1 class="ml-4">Estadisticas</h1>
                            <p class="opacity-75 ml-3">
                                Aqui encontraras datos Estadisticos de situaciones violentas en los ultimos años
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
   
<div class="container">
<div class="row">
<div class="col-md-6 ">
  <div class="">
                  <div class="card">
                        <div class="card-body">
                            <div class="chart">
                              <h4 class="text-center">Reporte Anual</h4>
              <line-chart :chart-data="datacollection"></line-chart>
                       </div>
                        </div>
                    </div>
                 </div>
</div>
<div class="col-md-6">
   <div class="">
            <div class="card">
                <div class="card-body">
                      <div class="chart">
                          <h4 class="text-center">Reporte Mensual</h4>
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
  import LineChart from './chart-total.js'
  import semanal from "@/components/datos-mensual.vue";
  export default {
    components: {
      LineChart,
      semanal
    },
    data () {
      return {
        datacollection: null,
        mensual: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
        
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: this.mensual,
           datasets: [{
            label: "Reporte Anual",
            data: [10, 31, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(0, 0, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(8, 29, 80, 1)',  
                'rgba(255, 155, 0, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 25, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5
        }]
        }
      }

    }
  }
</script>

<style>
.borde-redondo{
  border-radius: 20px 20px 20px 20px;
-moz-border-radius: 20px 20px 20px 20px;
-webkit-border-radius: 20px 20px 20px 20px;
border: 0px solid #000000;
}
</style>