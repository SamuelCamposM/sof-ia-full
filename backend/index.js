require('dotenv').config();
const express = require('express');
const serve = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

//modelo
const Casos = require('./src/models/casos')

mongoose.connect('mongodb://localhost/sofia', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => {
        console.log('conectado a la base de datos');
    }).catch(error => {
        console.log(error);

    })
//midlewares
serve.use(morgan('dev'));
serve.use(express.urlencoded({ extended: false }))
serve.use(express.json())
serve.use(cors())

//creando el servidor
serve.set("port", process.env.PORT || 4000)

const server = serve.listen(serve.get('port'), () => {
    console.log("server on port ", serve.get('port'));
})
//archivos estaticos
serve.use(express.static(__dirname + '/src/public'));
//routes
serve.use(require('./src/routes/index'))
//socket escuchando eventos
const socketIO = require("socket.io");
const io = socketIO.listen(server)




io.on("connect", (socket) => {
    console.log('nueva conexion iD:' + socket.id);

    socket.on('cliente-prediccion', async (datos) => {
        const TodosSegundos = []
        const TodosMinutos = []
        const horaExactas = []
        await (await Casos.find()).forEach(caso => {

            let minutos = caso.minuto
            let segundos = caso.segundos
            let horaExacta = caso.horaExacta
            TodosSegundos.push(segundos)
            TodosMinutos.push(minutos);
            horaExactas.push(horaExacta)
        })

        //comparacion si el minuto , segundo y dia actual ya tienen un caso de violencia
        let horaExacta = horaExactas.indexOf(new Date().toUTCString())
        let segundo = TodosSegundos.indexOf(new Date().getSeconds())
        let minuto = TodosMinutos.indexOf(new Date().getMinutes())

        if (minuto == -1 || segundo == -1 || horaExacta == -1) {
            let casos = new Casos()
            let caso = datos.tipoDeCaso
            casos.nombre = datos.tipoDeCaso,
                casos.probabilidad = datos.probability,
                casos.dia = new Date().getDate(),
                casos.hora = new Date().getHours(),
                casos.minuto = new Date().getMinutes(),
                casos.segundos = new Date().getSeconds()
            casos.horaExacta = new Date().toUTCString()
            console.log('guardado');
            casos.save()
            io.sockets.emit('guardado', {
                guardado: "dato guardado",
                caso : caso
            })
        } else {
            console.log('el dato ya existe');
        }
        //enviando los mismos datos en el frontend
        io.sockets.emit('casos', datos)
        clearInterval()
    })
})


/*
const win = require('./main')
win();
*/
module.exports = io;
