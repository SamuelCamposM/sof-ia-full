<template>
  <div>
    <br />
    <br />
    <br />
    <br />
     
     <v-card class="pa-md-4 mx-lg-auto" max-width="500" outlined :dark="oscuro">
       <v-alert type="error text-center animated  bounce delay-1s" v-if="animacion">
      Ocurrio un error! 
    </v-alert>
     <v-alert type="error text-center" v-else>
      Ocurrio un error! 
    </v-alert>
      <div>
    <v-text-field label="Usuario" :rules="rules" hide-details="auto"></v-text-field>
    <v-text-field label="Contraseña"></v-text-field>
  </div>

      <v-card-actions>
            <v-btn  block color="blue" dark>Iniciar Sesión</v-btn>
      </v-card-actions>
      <br>
    <p class="text-center">¿Aún no tienes cuenta en SOFIA?</p>
    <router-link to="/registro" style="text-decoration:none">
                <v-btn  block outlined color="light-blue darken-1" dark >Registrate</v-btn>
    </router-link>
    <v-divider></v-divider>
       <v-switch v-model="dark" label="Dark mode" @change="modoOscuro(dark)"></v-switch>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data(){
    return{
      animacion: false,
      dark:null
    }
  },
  methods:{
     
    ...mapActions(["SeleccionarColor","SeleccionarColorFondo",'modoOscuro']),

    //esta funcion si se ejecuta hace la animacion
    mostrarAnimacion(){
      this.animacion = !this.animacion
    }
  },
  computed: {
    ...mapState(['oscuro'])
  },
}
</script>