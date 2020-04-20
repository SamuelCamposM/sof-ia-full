<template>
  <div>
    <br />
    <br />
    <br />
    <br />
     
     <v-card class="pa-md-4 mx-lg-auto" max-width="500" outlined :dark="oscuro">
      <div>
    <form action="http://localhost:4000/signin" method="post">
     <v-text-field type="text" name="username"  class="d-none"  hide-details="auto" label="Usuario" v-model="username"></v-text-field> <!-- se esta ocultando pero sin este campo el formulario es inutil -->
    <v-text-field type="email" name="email"  hide-details="auto" label="Correo" v-model="correo"></v-text-field>
    <v-text-field type="password" name="password"  label="Contraseña" v-model="password" ></v-text-field>
    <v-btn  block color="blue" dark type="submit">Iniciar Sesion</v-btn>
    </form>
      </div>
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

import { mapActions , mapState } from 'vuex'
export default {
  name: "login",
  data() {
    return {
      password: "",
      username: "example",
      correo: "",
      dark:false
    };
  },
    methods:{
     
    ...mapActions(["SeleccionarColor","SeleccionarColorFondo",'modoOscuro']),

    //esta funcion si se ejecuta hace la animacion
 
  },
  computed: {
    ...mapState(['oscuro'])
  },
};
</script>
