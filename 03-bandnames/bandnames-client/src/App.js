import { useEffect, useState } from "react";
import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import { useSocket } from "./hooks/useSocket";


function App() {

  const [bands,setBands] = useState([]);
  const {socket, online} = useSocket('http://localhost:8080')
 
  useEffect(()=>{
    socket.on('current-bands', (bands)=>{
      setBands(bands)
      console.log(bands)
    })
  },[socket])

  const votar = ( id )=>{
    console.log("votar - app", id)
    socket.emit('votar-banda', {id})
  }

  const borrar = (id) =>{
    socket.emit('borrar-banda', {id})
  }

  const cambiarNombre = (id, nombre) =>{
    socket.emit('cambiar-nombre-banda', {id, nombre})

  }

  const crearBanda = (nombre) =>{
    socket.emit('agregar-banda', {nombre})

  }

  return (
    <div className="container"> 

    <div className="alert">
      <p>
        Service Status:
        {
          online
            ?<span className="text-success">Online</span>
            :<span className="text-danger">Offline</span>


        }

      </p>
    </div>

    <h1>
      Band Names
    </h1>
    <hr></hr>
    <div className="row">
      <div className="col-8"><BandList data={bands} votar={votar} borrar={borrar} cambiarNombre={cambiarNombre}/></div>
      <div className="col-4"><BandAdd crearBanda={crearBanda}/></div>

    </div>
    </div>
  );
}

export default App;
