import SocketIO from "socket.io";
import Casos from "../models/casos";

//funcion para manejar los datos de la violencia con socket.io
export function prediccionSocket(server) {
    const io = SocketIO.listen(server)

    io.on("connect", (socket) => {
        console.log('nueva conexion iD:' + socket.id);
         //datos de la camara que nos manda el frontend

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
            
        })
    })
}