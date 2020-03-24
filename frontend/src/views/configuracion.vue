<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1"></v-col>

      <v-col cols="6">
        <v-layout :wrap="true">
          <br />
          <div></div>
          <v-select
            v-model="selectFuente"
            :items="itemsFuente"
            :rules="[v => !!v || 'Item is required']"
            label="seleccione una fuente"
            required
          ></v-select>
        </v-layout>

        <v-layout :wrap="true">
          <br />
          <div></div>
          <v-select
            v-model="selectNavegacion"
            :items="itemsNavegacion"
            :rules="[v => !!v || 'Item is required']"
            label="Seleccione un color para el menu"
            blue
            lighten-5
            @change="SeleccionarColor(selectNavegacion)"
            required
          ></v-select>
        </v-layout>

        <v-layout :wrap="true">
          <br />
          <div></div>
          <v-select
            v-model="selectFondo"
            :items="itemsFondo"
            :rules="[v => !!v || 'Item is required']"
            label="Selecciona el color para el fondo"
            required
            @change="SeleccionarColorFondo(selectFondo)"
          ></v-select>
          <v-divider> </v-divider>
             
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "configuracion",
  data() {
    return {
      input: "",
      selectFuente: "Roboto",
      selectNavegacion: "",
      selectFondo: "",
      itemsFuente: ["Roboto", "monospace", "sans-serif", " Verdana"],
      itemsNavegacion: [
        "red",
        "purple ",
        "purple darken-1",
        "blue",
        "light-blue",
        "lime",
        "yellow accent-2",
        "black",
        "deep-orange",
        "primary",
        "secondary",
        "accent",
        "error",
        "info",
        "success",
        "warning"
      ],
      itemsFondo: [
        "white",
        "red",
        "purple ",
        "purple darken-1",
        "blue",
        "light-blue",
        "lime",
        "yellow accent-2",
        "black",
        "deep-orange"
      ],
      contador: 0
    };
  },
  methods: {
    ...mapActions(["SeleccionarColor","SeleccionarColorFondo",'modoOscuro'])
  },
  
};
</script>