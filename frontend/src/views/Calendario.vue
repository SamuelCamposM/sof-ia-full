<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        <v-row>
          <v-layout :wrap="true">
            <v-flex>
              <v-card>
                <v-date-picker
                  color="rgb(43,46,59)"
                  v-model="fecha"
                  full-width
                  class="mt-4"
                  locale="es-cl"
                  :min="minimo"
                  :max="max"
                  dark
                  @change="filtrarPorFecha(fecha)"
                  hover="true"
                ></v-date-picker>
              </v-card>
              <br />
              <v-divider></v-divider>
              <v-card id="borde" color="secondary" dark hover="true">
                <v-card-text class="title text-center"> Fecha elegida : {{ fecha }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-row>
      </v-col>
      <br />
      <v-col cols="6">
        <v-layout :wrap="true">
          <br />
          <div></div>
          <v-card
            id="bordes"
 
           color="blue lighten-2"
            v-for="filtrado in filtrados"
            :key="filtrado.id"
            class="mx-4 my-4"
            hover="true"
          >
            <v-card-title class="title text-center">{{filtrado.nombre}}</v-card-title>
            <v-card-subtitle
              class="title text-center"
              v-if="filtrado.hora > 12  "
            >{{ filtrado.hora - 12 }} : {{ filtrado.minuto }} pm</v-card-subtitle>
            <v-card-subtitle
              class="title text-center"
              v-else
            >{{ filtrado.hora }} : {{ filtrado.minuto }} am</v-card-subtitle>
          </v-card>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  data() {
    return {
      alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],
      alignment: "center",
      dense: false,
      justifyAvailable: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between"
      ],
      justify: "center",
      fecha: new Date().toISOString().substr(0, 10),
      minimo: "1984",
      max: new Date().toISOString().substr(0, 10),

      colecciones: [],
      filtrados: []
    };
  },
  methods: {
    traerColeccion() {
      let self = this;
      fetch("http://localhost:4000/mostrando-casos")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          self.colecciones = data;
          self.filtrarPorFecha();
        });
    },
    filtrarPorFecha(fecha) {
      console.log(fecha);
      this.filtrados = [];
      this.colecciones.forEach(doc => {
        if (doc.FechaISO == this.fecha) {
          console.log(doc.FechaISO);
          this.filtrados.push(doc);
        }
      });
      console.log(this.filtrados);
    }
  },

  created() {
    this.traerColeccion();
  }
};
</script>
<style >
#borde {
  border-radius: 60px 60px 60px 60px;
  -moz-border-radius: 60px 60px 60px 60px;
  -webkit-border-radius: 60px 60px 60px 60px;
  border: 2px solid #000000;
}
#bordes {
  border-radius: 22px 22px 22px 22px;
  -moz-border-radius: 22px 22px 22px 22px;
  -webkit-border-radius: 22px 22px 22px 22px;
  border: 0px solid #000000;
}
</style>
