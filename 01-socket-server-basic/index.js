const  Server  = require("./models/server");

const server = new Server();

server.execute();






// //Connection
// io.on('connection', ( socket ) => { 
//     console.log(socket.id) //Un dispositiu s'ha connectat, mo un usuari
//     // Un usuari pot tenir multiples dispositius

//     // socket.emit('mensaje-bienvenida', {
//     //     msg:'Hola mundo, bienvenido al server',
//     //     date: new Date()
//     // })

//     socket.on('mensaje-to-server',(data)=>{
//         console.log(data)
//         io.emit('mensaje-from-server',data)
//        })
//  });

