// Servidor Excpress
const express = require('express');
const app = express()
//Servidor de sockets
const server = require('http').createServer(app);
//Configuracion del socket server
const io = require('socket.io')(server);

// Desplegar el directori public

app.use(express.static(__dirname + '/public'))


//Connection
io.on('connection', ( socket ) => { 
    console.log(socket.id) //Un dispositiu s'ha connectat, mo un usuari
    // Un usuari pot tenir multiples dispositius

    // socket.emit('mensaje-bienvenida', {
    //     msg:'Hola mundo, bienvenido al server',
    //     date: new Date()
    // })

    socket.on('mensaje-to-server',(data)=>{
        console.log(data)
        io.emit('mensaje-from-server',data)
       })
 });

server.listen(8080,()=>{
    console.log("Server corriendo en puerto 8080")
});