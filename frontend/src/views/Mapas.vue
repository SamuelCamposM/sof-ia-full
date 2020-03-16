<template>
<div class="col-8">
  <div style="height: 500px; width: 100%">
<l-map  style="height: 200px overflow: auto;" :zoom="zoom" :center="center">
<l-tile-layer :url="url"></l-tile-layer>
<l-marker :lat-lng="markerLatLng" ></l-marker>
</l-map>
</div>
</div>
</template>

<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      url: 'http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      zoom: 3,
      center: [13.7941847, -88.8965302],
      markerLatLng: [13.7941847, -88.8965302],
    };
  }
}
</script>
