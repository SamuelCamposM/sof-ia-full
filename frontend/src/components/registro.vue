<template>
  <div>
    <br />
    <br />
    <br />
    <br />
     
     <v-card class="pa-md-4 mx-lg-auto" max-width="500" outlined :dark="oscuro">
      <div>
    <form action="http://localhost:4000/signup" method="post">
       <v-text-field type="text" name="username"  hide-details="auto" label="username"></v-text-field>
    <v-text-field type="email" name="email"  hide-details="auto" label="Correo"></v-text-field>
    <v-text-field type="password" name="password"  label="Contraseña" ></v-text-field>
    <v-btn  block color="blue" dark type="submit" >Registrarse</v-btn>
    </form>
      </div>
      <br>
    <v-divider></v-divider>
       <v-switch v-model="dark" label="Dark mode" @change="modoOscuro(dark)"></v-switch>
    </v-card>
  </div>
</template>
<script>

import { mapActions ,mapState } from 'vuex'
export default {
  name: "registro",
  data() {
    return {
      password: "",
      username: "",
      correo: "",
      dark:false
    };
  },
    methods:{
     
    ...mapActions(["SeleccionarColor","SeleccionarColorFondo",'modoOscuro']), 
  },
  computed: {
    ...mapState(['oscuro'])
  },
};
</script>
