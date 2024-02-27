const { usuarioConectado, usuarioDesconectado } = require("../controllers/sockets");
const { comprobarJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {
        const [valido,uid] = comprobarJWT(socket.handshake.query["x-token"])
        if(!valido){
            console.log("socket no identificado = ", uid)
            return socket.disconnect()
        }

        await usuarioConectado( uid );
        // SI Token no es valido, desconectar
        

        //TODO: Saber que usuario está activo mediante UID

        // TODO: Emitir todos los usuarios conectados

        //TODO: Socket join, uid

        // TODO: Escuchar cuando el cliente manda un mensaje
        // mensaje-personal

        // TODO: Disconnect
        // Marcar en la DB que el user se ha desconectado
        socket.on('disconnect', async()=>{
            console.log("cliente desconectado")
            await usuarioDesconectado(uid)
        })

        //TODO: Emitir todos los desconectados
        
        
        });
    }


}


module.exports = Sockets;