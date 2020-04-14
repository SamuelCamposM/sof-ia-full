<template>
    <v-container class="grey lighten-5">
    <v-row class="mb-6">
      <!--Formulario para Registrar Camara-->
      <v-col class="mb-6">
          <h1>Registrar Nueva Camara</h1>
        <form id="camaraNueva">
        <v-text-field v-model="camara" label="Nombre Camara"/>
        <v-text-field v-model="lat" label="Latitud"/>

        <v-text-field v-model="long" label="Longitud"/>
        
        <v-text-field v-model="instalador" label="Nombre del Instalador"/>
        

        <v-btn class="mr-4" @click="crearJSON()">Agregar Camara</v-btn>
        <v-btn class="mr-4" type="reset">Borrar</v-btn>

        <v-btn class="mr-4" @click="ubicame()">Obtener Coordenadas</v-btn>
        <br/>
       <h2><div id="out"></div></h2>
     </form>
    <!--Final del Formulario-->
      </v-col>
    <!--Mapa-->
      <v-col class="mb-6">
          <l-map style="height: 500px" :zoom="zoom" :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <lMarker :lat-lng="center"></lMarker>
          </l-map>
      </v-col>
  <!--Fin del Mapa-->
    </v-row>
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
      
      //Mapa
        return {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        zoom: 10,
        center: [13.7372296,-89.7132659],
        markerLatLng: [13.7372296,-89.7132659]
        };
    },
    methods: { 
           
      //Boton para obtener coordenadas actuales
      ubicame() {
        var output = document.getElementById("out");
        var outLatitude = document.getElementById("latitude");


        if (!navigator.geolocation){
            output.innerHTML = "<p>La geolocalización no es soportada en tu navegador</p>";
            return;
        }

        function success(position) {
            var latitude  = position.coords.latitude;
            var longitude = position.coords.longitude;

            output.innerHTML = '<p>Su Latitude es: ' + latitude + '<br>' + '<p> Su Longitud es: ' + longitude; 

            outLatitude.innerHTML = latitude;
            output.appendChild(img);
        };

        function error() {
            output.innerHTML = "No podemos ubicarte";
        };

        output.innerHTML = "<p>Ubicando...</p>";

        navigator.geolocation.getCurrentPosition(success, error);
        },

        

      crearJSON(){
        fetch("http://localhost:8080/registroCamara", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: console.log(JSON.stringify(nombreCamara, lat, long, instaldor) )
        })}
        
    },
    };
    //Solucion a LMarker desaparecido
        delete Icon.Default.prototype._getIconUrl;
            Icon.Default.mergeOptions({
            iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
            iconUrl: require('leaflet/dist/images/marker-icon.png'),
            shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        });



  </script>