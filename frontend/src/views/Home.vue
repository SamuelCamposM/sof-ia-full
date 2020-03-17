<template>
  <div class="home">
    <camaras/>
  </div>
</template>

<script>
// @ is an alias to /src
import camaras from "@/components/camaras.vue";

export default {
  name: 'home',
  components: {
   camaras
  }
}
</script>
