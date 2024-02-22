

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

        // TODO: Validar el JWT
        // SI Token no es valido, desconectar
        

        //TODO: Saber que usuario está activo mediante UID

        // TODO: Emitir todos los usuarios conectados

        //TODO: Socket join, uid

        // TODO: Escuchar cuando el cliente manda un mensaje
        // mensaje-personal

        // TODO: Disconnect
        // Marcar en la DB que el user se ha desconectado

        //TODO: Emitir todos los desconectados
        
        
        });
    }


}


module.exports = Sockets;