<template>
  <div>
    <br />
    <br />
    <br />
    <br />
     
     <v-card class="pa-md-4 mx-lg-auto" max-width="500" outlined>
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
            <v-btn  block color="deep-purple" dark>Crear Cuenta</v-btn>
      </v-card-actions>
      <br>
    
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      animacion: false
    }
  },
  methods:{
    mostrarAnimacion(){
      this.animacion = !this.animacion
    }
  }
}
</script>