<template>
  <v-container class="fill-height"
        fluid>
    <v-row align="center"
          justify="center">
          

      <v-col
            cols="12"
            sm="8"
            md="4"
            
          >
         <v-card class="elevation-12" min-width="500" aling="center ">
         
          <v-toolbar
                color="purple" >
          <v-toolbar-title >Configuracion</v-toolbar-title>
          
          </v-toolbar>
          
        <br />
        <v-layout :wrap="true" >
          <br />
          <div ></div>
          
          <v-select
            v-model="selectFuente"
            :items="itemsFuente"
            :rules="[v => !!v || 'Item is required']"
            label="seleccione una fuente"
            
            required
          ></v-select>
          
          
        </v-layout>
<br />
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
          <br />
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
        </v-card>
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