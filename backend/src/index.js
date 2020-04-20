import express from "express";
const app = express();
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import flash from "connect-flash";
import { ConectarDb } from "./database"; //importando funcion de la base de datos
//Passport
require('./passport/local')

//midlewares
app.use(cors())
app.use(session({
    secret:'mysecretsesion',
    resave:false,
    saveUninitialized:false
}))

app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res , next) => {
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signinMessage = req.flash('signinMessage');
    next()
})

//archivos estaticos
app.use(express.static(__dirname + '/src/public'));
//routes
app.use('/', require('./routes/index'))


let puerto = process.env.PORT || 4000
//creando el servidor
const server = app.listen(puerto, () => {
    console.log("servidor en el puerto ", puerto);
    ConectarDb()// ejecuto la funcion para conectar a MongoDB
})

import {prediccionSocket} from "./socket/prediccion";

prediccionSocket(server) // le paso como parametro el servidor para poder utilizar socket.io en el archivo prediccion.js