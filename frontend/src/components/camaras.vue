<template>
  <div>
    <div>Teachable Machine Pose Model</div>
    <div class="d-flex align-items-center">
      jeje Lorem ipsum dolor sit amet consectetur adipisicing elit. In eum non
      maxime suscipit veritatis recusandae dignissimos rem animi quibusdam nobis
      vel fuga unde, voluptatum quae laudantium, dolores magnam quia facilis.
      <button type="button" @click="init()" class="">Start</button>
    </div>

    <div><canvas id="canvas"></canvas></div>
    <div id="label-container"></div>
  </div>
</template>

<script>
import * as tmPose from "@teachablemachine/pose";
import io from "socket.io-client";
export default {
  created(){
this.conexionSocket()
  },
  data() {
    return {
      URL: "https://teachablemachine.withgoogle.com/models/aImvsDZb/",
      model: null,
      webcam: null,
      ctx: null,
      labelContainer: null,
      maxPredictions: null,
      socket: null,
      valor: null
    };
  },
  methods: {
    conexionSocket() {
    this.socket = io("http://localhost:4000");
    if (this.socket) {
      console.log("conectado");
    }
  },
    async init() {
      //esta funcion inicia el modelo
      const modelURL = this.URL + "model.json";
      const metadataURL = this.URL + "metadata.json";

      // cargar el modelo y los metadatos
      // Consulte tmImage.loadFromFiles () en la API para admitir archivos de un selector de archivos
      // Nota: la biblioteca de pose agrega un objeto tmPose a su ventana (window.tmPose)
      this.model = await tmPose.load(modelURL, metadataURL);
      this.maxPredictions = this.model.getTotalClasses();

      //Función de conveniencia para configurar una cámara web
      const size = 500;
      const flip = true; // si voltear la cámara web
      this.webcam = new tmPose.Webcam(size, size, flip); //ancho, alto, volteo
      await this.webcam.setup(); // solicitar acceso a la webcam
      await this.webcam.play();
      window.requestAnimationFrame(this.loop);

      // agregar / obtener elementos al DOM
      const canvas = document.getElementById("canvas");
      canvas.width = size;
      canvas.height = size;
      this.ctx = canvas.getContext("2d");
      this.labelContainer = document.getElementById("label-container");
      for (let i = 0; i < this.maxPredictions; i++) {
        //y etiquetas de clase
        this.labelContainer.appendChild(document.createElement("div"));
      }
    },

    async loop() {
      this.webcam.update(); // actualizar el marco(fps) de la cámara web
      await this.prediccion();
      window.requestAnimationFrame(this.loop);
    },
    async prediccion() {
      // Predicción n. ° 1: ejecutar la entrada a través de Posenet
      // EstimaciónPose puede incluir un elemento html de imagen, video o lienzo
      const { pose, posenetOutput } = await this.model.estimatePose(this.webcam.canvas);
      // Predicción 2: ejecutar la entrada a través del modelo de clasificación de máquina de enseñanza
      const prediction = await this.model.predict(posenetOutput);

      for (let i = 0; i < this.maxPredictions; i++) {
        const classPrediction =
          prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        this.labelContainer.childNodes[i].innerHTML = classPrediction;

        if (
          prediction[i].probability == 1 &&
          prediction[i].className != "Nelson"
        ) {
        this.valor = prediction[i].className;

          let probability = prediction[i].probability.toFixed(2);
          let tipoDeCaso = prediction[i].className;

          this.socket.emit("cliente-prediccion", {
            tipoDeCaso: tipoDeCaso,
            probability: probability,
            horas: new Date().getHours(),
            minutos: new Date().getMinutes(),
            segundos: new Date().getSeconds()
          });
        }
      }

      // finalmente dibuja las poses
      this.drawPose(pose);
    },
    drawPose(pose) {
      if (this.webcam.canvas) {
        this.ctx.drawImage(this.webcam.canvas, 0, 0);
        // dibujar los puntos clave y el esqueleto
        if (pose) {
          const minPartConfidence = 0.5;
          tmPose.drawKeypoints(pose.keypoints, minPartConfidence, this.ctx);
          tmPose.drawSkeleton(pose.keypoints, minPartConfidence, this.ctx);
        }
      }
    }
  }
};
</script>
