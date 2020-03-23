<template>
  <div id="app">
    <v-app id="inspire" style="background-color: rgb(54,57,63)">
      <v-container>
        <v-navigation-drawer
          v-model="drawer"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          absolute
          color="rgb(32,34,37)"
          class=".headline fo"
        >
          <v-list dense nav class="py-0">
            <router-link to="/" style="text-decoration:none">
              <v-list-item link class="py-2">
                <v-list-item-icon>
                  <v-tooltip right color="light-blue">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">home</v-icon>
                    </template>
                    <span>Inicio</span>
                  </v-tooltip>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="py-2 title white--text">Inicio</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/mapa" style="text-decoration:none">
              <v-list-item link class="py-2">
                <v-list-item-icon>
                  <v-tooltip right color="light-blue">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">location_on</v-icon>
                    </template>
                    <span>Mapa</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title white--text">Mapa</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/estadistica" style="text-decoration:none">
              <v-list-item link class="py-2 white--text">
                <v-list-item-icon>
                  <v-tooltip right color="light-blue">
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
                  <v-tooltip right color="light-blue">
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
                  <v-tooltip right color="light-blue">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">settings</v-icon>
                    </template>
                    <span>Configuracion</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title
                    class="py-2 title white--text color-hover"
                   
                  >Configuración</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>



             <router-link to="/login" style="text-decoration:none">
              <v-list-item link class="py-2 white--text">
                <v-list-item-icon class="py-2 title">
                  <v-tooltip right color="light-blue">
                    <template v-slot:activator="{ on }">
                      <v-icon class="white--text" v-on="on">person</v-icon>
                    </template>
                    <span>Cuenta</span>
                  </v-tooltip>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title
                    class="py-2 title white--text "
                    
                  >Configuración</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
      </v-container>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
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
      background: true
    };
  }
};
</script>

<style>
li a {
  text-decoration: none;
}
#app {
  background-color: rgb(43, 46, 59);
}
.menu-fondo {
  background-color: rgb(46, 48, 53);
}

a.router-Link-exact-active{
  color: dodgerblue;
}
</style>