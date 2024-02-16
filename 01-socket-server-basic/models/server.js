
// Servidor Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require("path");
const Sockets = require('./sockets');
class Server{
    constructor(){
        this.app = express()
        this.port = 8080;
        // Http server
        this.server = http.createServer( this.app );

        //Configuracion del socket server
        this.io = socketio( this.server, { /*configuraciones*/ } );
    }

    middlewares(){
        // Desplegar el directori public
        this.app.use(express.static(path.resolve(__dirname, "../public") ))

    }

    configurarSockets(){
        new Sockets( this.io );
    }

    execute(){
        // Inicializar middlewares
        this.middlewares();
        //Inicializar Sockets
        this.configurarSockets();
        //Inicializar server
        this.server.listen(this.port,()=>{
            console.log("Server corriendo en puerto:", this.port)
        });
    }
}

module.exports = Server;