const { usuarioConectado, usuarioDesconectado, getUsuarios } = require("../controllers/sockets");
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

        // Unir a sala de socket.io
        socket.join( uid );
        

        //TODO: Saber que usuario está activo mediante UID

        // TODO: Emitir todos los usuarios conectados

        this.io.emit("lista-usuarios",await getUsuarios())

        //TODO: Socket join, uid

        // TODO: Escuchar cuando el cliente manda un mensaje
        // mensaje-personal
        socket.on("mensaje-personal", (payload) =>{
            console.log(payload)
        })

        // TODO: Disconnect
        // Marcar en la DB que el user se ha desconectado
        socket.on('disconnect', async()=>{
            console.log("cliente desconectado")
            await usuarioDesconectado(uid)
            this.io.emit("lista-usuarios",await getUsuarios())

        })

        //TODO: Emitir todos los desconectados
        
        
        });
    }


}


module.exports = Sockets;