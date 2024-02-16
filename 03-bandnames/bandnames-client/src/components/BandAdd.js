import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

const BandAdd = () => {

  const [valor, setValor]=useState('')
  const {socket} = useContext(SocketContext);

  const onSubmit = (ev)=>{
    ev.preventDefault();
    if(valor.trim().length > 0){
      socket.emit('agregar-banda', {nombre:valor})
    }
  }
  return (
    <>
      <h3>Agregar Banda</h3>
      <form onSubmit={onSubmit}>
        <input className='form-control' placeholder='nuevo nombre de banda' value = {valor} onChange={(ev) => setValor(ev.target.value)}/>
      </form>
    </>
  )
}

export default BandAdd
