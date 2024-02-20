const TicketList = require("./ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        //Crear la instancia del ticket list
        this.ticketList = new TicketList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log("cliente conectado")
            // Escuchar evento: mensaje-to-server
            socket.on('solicitar-ticket', (data,callback) => {
                const nuevoTicket = this.ticketList.crearTicket();
                console.log(nuevoTicket)
                callback(nuevoTicket);
            });
            
        
        });
    }


}


module.exports = Sockets;