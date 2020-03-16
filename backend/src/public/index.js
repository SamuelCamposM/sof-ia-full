
//SOCKET.IO
const socket = io();
// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/SZKYnKYw/";
let model, webcam, ctx, labelContainer, maxPredictions;

async function init() {
    //esta funcion inicia el modelo
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    // cargar el modelo y los metadatos
    // Consulte tmImage.loadFromFiles () en la API para admitir archivos de un selector de archivos
    // Nota: la biblioteca de pose agrega un objeto tmPose a su ventana (window.tmPose)
    model = await tmPose.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
console.log(maxPredictions);


    //Función de conveniencia para configurar una cámara web
    const size = 500;
    const flip = true; // si voltear la cámara web
    webcam = new tmPose.Webcam(size, size, flip); //ancho, alto, volteo
    await webcam.setup(); // solicitar acceso a la webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // agregar / obtener elementos al DOM
    const canvas = document.getElementById("canvas");
    canvas.width = size; canvas.height = size;
    ctx = canvas.getContext("2d");
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { //y etiquetas de clase
        labelContainer.appendChild(document.createElement("div"));
    }
}
init();

async function loop(timestamp) {
    webcam.update(); // actualizar el marco(fps) de la cámara web
    await prediccion();
    window.requestAnimationFrame(loop);
}

async function prediccion() {
    // Predicción n. ° 1: ejecutar la entrada a través de Posenet
    //       EstimaciónPose puede incluir un elemento html de imagen, video o lienzo
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    // Predicción 2: ejecutar la entrada a través del modelo de clasificación de máquina de enseñanza
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {


        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;

        if (prediction[i].probability == 1 && prediction[i].className != 'persona de pie') {

            let valor = prediction[i].className

            let probability = prediction[i].probability.toFixed(2)
            let tipoDeCaso = prediction[i].className

            socket.emit('cliente-prediccion', {
                tipoDeCaso: tipoDeCaso,
                probability: probability,
                horas: new Date().getHours(),
                minutos: new Date().getMinutes(),
                segundos: new Date().getSeconds()
            })
        }
    }

    // finalmente dibuja las poses
    drawPose(pose);
}

function drawPose(pose) {
    if (webcam.canvas) {
        ctx.drawImage(webcam.canvas, 0, 0);
        // dibujar los puntos clave y el esqueleto
        if (pose) {
            const minPartConfidence = 0.5;
            tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
            tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
        }
    }
}

socket.on('casos', (datos) => {

    contenedor.innerHTML += `   <p>
<strong>${datos.tipoDeCaso} </strong>: ${datos.probability}
</p>
`
})

socket.on('acceso', (datos) => {
    console.log("array global de minutos", datos.TodosMinutos);
    console.log("array global de segundos", datos.TodosSegundos);


    socket.emit('AccesoAGuardar', {
        //aqui estan todas las variables
        //array globales
        TodosMinutos: datos.TodosMinutos,
        TodosSegundos: datos.TodosSegundos,
        TodosDias: datos.TodosDias
        //segundos y minutos que estan en la base de datos

    })
})
socket.on('guardado', (datos) => {
    console.log(datos.guardado);
    let caso = datos.caso
    
 
})


