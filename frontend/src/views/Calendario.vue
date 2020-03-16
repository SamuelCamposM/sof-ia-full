<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-row>
          <v-layout :wrap="true">
            <v-flex xs12>
              <v-card>
                <v-date-picker
                  color="rgb(43,46,59)"
                  v-model="fecha"
                  full-width
                  class="mt-4"
                  locale="es-cl"
                  :min="minimo"
                  :max="max"
                  @change="filtrarPorFecha(fecha)"
                ></v-date-picker>
              </v-card>
              <v-card color="secondary" dark v-for="filtrado in filtrados" :key="filtrado.id">
                <v-card-text class="title text-center">{{ fecha }} -{{ valor }} - {{filtrado.nombre}} - {{filtrado.FechaISO}} </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
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
      fecha: null,
      minimo: "1984",
      max: new Date().toISOString().substr(0, 10),
      valor: null,
      colecciones: [],
      filtrados: [],
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
          self.filtrarPorFecha()
        });
    },
    filtrarPorFecha(fecha) {
      console.log(fecha);
this.filtrados = []
      this.colecciones.forEach(doc => {
        if (doc.FechaISO == this.fecha) {
      console.log(doc.FechaISO);
      this.filtrados.push(doc)
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
