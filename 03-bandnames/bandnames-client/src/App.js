import { useEffect, useState } from "react";
import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import io from 'socket.io-client'

const connectSocketServer = () =>{
  const socket = io.connect('http://localhost:8080')
  return socket;
}

function App() {
  const [socket] = useState(connectSocketServer(),{
    transports:['websocket']
  });
  const [online,setOnline] = useState(false);
  const [bands,setBands] = useState([]);

  useEffect(()=>{
    console.log(socket)
    setOnline(socket.connected)
  },[socket])

  useEffect(()=>{
    socket.on('connect', ()=>{
      setOnline(true)
    })
  },[socket])
  useEffect(()=>{
    socket.on('disconnect', ()=>{
      setOnline(false)
    })
  },[socket])

  useEffect(()=>{
    socket.on('current-bands', (bands)=>{
      setBands(bands)
      console.log(bands)
    })
  },[socket])

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
      <div className="col-8"><BandList data={bands}/></div>
      <div className="col-4"><BandAdd/></div>

    </div>
    </div>
  );
}

export default App;
