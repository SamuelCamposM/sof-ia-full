<template>
  <div>
    <b>Bienvenido</b>
  </div>
</template>


<script>
import router from "../router";
export default {
  name: "welcome",
  data() {
    return {
      usuario: []
    };
  },
  async created() {
    await this.OneUser();
    console.log(this.$route.params.idUser);
  },
  methods: {
    OneUser() {
      fetch("http://localhost:4000/oneUser/" + this.$route.params.idUser)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.usuario = data;
          sessionStorage.setItem("idUser", this.$route.params.idUser);
          const id = sessionStorage.getItem("idUser");
          console.log("mi id es ", id);
          sessionStorage.setItem('usuario',this.usuario)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>