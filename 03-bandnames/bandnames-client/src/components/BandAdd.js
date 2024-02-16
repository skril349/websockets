import React, { useState } from 'react'
import { useSocket } from '../hooks/useSocket'

const BandAdd = () => {

  const [valor, setValor]=useState('')
  const {socket} = useSocket('http://localhost:8080');

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
