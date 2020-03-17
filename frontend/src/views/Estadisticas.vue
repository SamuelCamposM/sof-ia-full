<template>
  <div class="home">
    <chart msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import chart from '@/components/chart.vue'

export default {
  name: 'home',
  components: {
    chart
  }
}
</script>
