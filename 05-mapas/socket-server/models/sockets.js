const Marcadores = require("./marcadores");


class Sockets {

    constructor( io ) {

        this.io = io;
        this.marcadores = new Marcadores();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log("connected client")

           // TO DO marcadores -activos


           // marcador -nuevo


           //Marcador actualizado

            
        
        });
    }


}


module.exports = Sockets;