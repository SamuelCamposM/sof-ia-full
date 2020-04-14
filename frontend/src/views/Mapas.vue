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
 import { Icon } from 'leaflet';
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

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
</script>