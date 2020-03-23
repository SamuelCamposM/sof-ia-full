<template>
  <v-container fluid>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="5">
        <v-row>
          <v-layout :wrap="true">
            <v-flex>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Fuente</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Color de Navegacion</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Color de Fondo</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="white--text">Tamaño de Fuente</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-flex>
          </v-layout>
        </v-row>
      </v-col>
      <br />
      <v-col cols="6">
        <v-layout :wrap="true">
          <br />
          <div></div>
          <v-select
            v-model="selectFuente"
            :items="itemsFuente"
            :rules="[v => !!v || 'Item is required']"
            label="Fuente"
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
            label="Color"
            blue
            lighten-5
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
            label="Color"
            required
          ></v-select>
        </v-layout>
        <v-text-field
          v-model="contador"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
  }
};
</script>