<template>
 
    <v-container>
          <l-map style="height: 500px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <lMarker :lat-lng="center"></lMarker>
          </l-map>
     </v-container>
     
</template>
<script>

import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 10,
      center: [13.8333000,-88.9167000],
      markerLatLng: [13.8333000,-88.9167000]
    };
  }
};
</script>

<style>