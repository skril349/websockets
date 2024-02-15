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
io.on('connection', () => { 
    console.log("cliente conectado") //Un dispositiu s'ha connectat, mo un usuari
    // Un usuari pot tenir multiples dispositius

 });

server.listen(8080,()=>{
    console.log("Server corriendo en puerto 8080")
});