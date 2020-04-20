<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout :class="ColorNavegacionFondo" :color="ColorNavegacionFondo" >
  <v-container >
        <v-navigation-drawer
          v-model="drawer"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          absolute
          :color="ColorNavegacion"
          class=".headline fo"
        >
          <v-list dense nav class="py-0">
            <v-item>
              <router-link to="/home" style="text-decoration:none" >
                <v-list-item link class="py-2">
                  <v-list-item-icon>
                    <v-tooltip right :color="ColorNavegacion">
                      <template v-slot:activator="{ on }">
                        <v-icon  v-on="on" class="white--text">home</v-icon>
                      </template>
                      <span>Inicio </span>
                    </v-tooltip>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="py-2 title white--text .font-weight-thin">Inicio</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </v-item>

            <router-link to="/mapa" style="text-decoration:none" >
              <v-list-item link class="py-2">
                <v-list-item-icon>
                  <v-tooltip right :color="ColorNavegacion">
                    <template v-slot:activator="{ on }">
                      <v-icon  v-on="on" class="white--text">location_on</v-icon>
                    </template>
                    <span>Mapa</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title white--text .font-weight-thin">Mapa</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/estadistica" style="text-decoration:none">
              <v-list-item link class="py-2 white--text">
                <v-list-item-icon>
                  <v-tooltip right :color="ColorNavegacion">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">bar_chart</v-icon>
                    </template>
                    <span>Estadisticas</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title white--text">Estadisticas</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/calendario" style="text-decoration:none">
              <v-list-item link class="py-2">
                <v-list-item-icon>
                  <v-tooltip right :color="ColorNavegacion">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">calendar_today</v-icon>
                    </template>
                    <span>Calendario</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title white--text">Calendario</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/configuracion" style="text-decoration:none">
              <v-list-item link class="py-2 white--text">
                <v-list-item-icon class="py-2 title">
                  <v-tooltip right :color="ColorNavegacion">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">settings</v-icon>
                    </template>
                    <span>Configuracion</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title white--text color-hover">Configuración</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/" style="text-decoration:none">
              <v-list-item link class="py-2 white--text">
                <v-list-item-icon class="py-2 title">
                  <v-tooltip right :color="ColorNavegacion">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">person</v-icon>
                    </template>
                    <span>Cuenta</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title white--text">Cuenta</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
     
      <router-view></router-view>
       </v-container>
       </v-layout>
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueRouter from "vue-router";
export default {
 
  data() {
    return {
      items: [
        { title: "Inicio", icon: "home" },
        { title: "Mapa", icon: "location_on" },
        { title: "Estadisticas", icon: "bar_chart" },
        { title: "Calendario", icon: "calendar_today" },
        { title: "Configuración", icon: "settings" }
      ],
      drawer: true,
      color: "success",
      right: true,
      miniVariant: true,
      expandOnHover: false,
      background: true,
      colorHome: true,
      colorMapa: false,  
      colorGrafica:true,
      colorCalendario:false,
      colorConfiguracion:true,
      colorlogin: false,

    };

  },
  computed: {
    ...mapState(['ColorNavegacion','ColorNavegacionFondo'])
  },
  
};
</script>

