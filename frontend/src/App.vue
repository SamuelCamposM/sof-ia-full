<template>
  <div id="app">
    <v-app id="inspire" style="background-color: rgb(43,46,59);">
      <v-container>
        <v-navigation-drawer
          v-model="drawer"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          absolute
          class=".headline fo"
        >
          <v-list dense nav class="py-0">
            <router-link to="/" style="text-decoration:none">
              <v-list-item link class="py-2 ">
                <v-list-item-icon>
                  <v-icon >home</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title">Inicio</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/mapa" style="text-decoration:none">
              <v-list-item link class="py-2">
                <v-list-item-icon>
                  <v-icon >location_on</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title ">Mapa</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/estadistica" style="text-decoration:none">
              <v-list-item link class="py-2 white--text">
                <v-list-item-icon>
                  <v-icon >bar_chart</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title " >Estadisticas</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/calendario" style="text-decoration:none">
              <v-list-item link class="py-2 ">
                <v-list-item-icon>
                  <v-icon >calendar_today</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title">Calendario</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>

            <router-link to="/configuracion" style="text-decoration:none">
              <v-list-item link class="py-2 white--text">
                <v-list-item-icon class="py-2 title">
                  <v-icon >settings</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title class="py-2 title">Configuración</v-list-item-title>
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
import VueRouter from 'vue-router'
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
      expandOnHover: true,
      background: true
    };
  }
};
</script>

<style>
li a {
  text-decoration: none;
}
#app{
  background-color: rgb(43,46,59);
}
</style>