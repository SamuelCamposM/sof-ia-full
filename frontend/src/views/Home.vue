<template>
  <div class="home">
    <camaras/>
    {{ usuario }}
  </div>
</template>

<script>
// @ is an alias to /src
import camaras from "@/components/camaras.vue";

export default {
  name: 'home',
  created(){
        let id = document.cookie.split("Param=")
      this.idUser = id[1]
      let token = document.cookie
      token.split(';');
      token.split(',');
      token.split('Param=');
         console.log("tu valor es:" +  token);
  },
  mounted(){        
    //this.getUser() 
},
  components: {
   camaras
  },
  data(){
    return{
      idUser: "",
      auth: "",
      usuario: []
    }
  },
  methods:{
    getUser(){      
     fetch(`http://localhost:4000/user/oneUser?secret_token=${this.auth}` ) 
     .then(res => res.json())
     .then(data => this.usuario = data)
     .catch(err => console.log(err))
    }
  }
}
</script>

