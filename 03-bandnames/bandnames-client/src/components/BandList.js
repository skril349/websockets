import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

const BandList = () => {

    const [bands, setBands] = useState([]);
    const { socket } = useContext(SocketContext)

    useEffect(() => {
        socket.on('current-bands', (bands) => {
            setBands(bands)
        })
        return ()=> socket.off('current-bands')
    }, [socket])

    const cambioNombre = (event, id) => {
        const nuevoNombre = event.target.value;
        setBands(bands => bands.map(band => {
            if (band.id === id) {
                band.name = nuevoNombre
            }
            return band;
        }))
    }

    const onPerdioFoco = (id, nombre) => {
        socket.emit('cambiar-nombre-banda', { id, nombre })
    }

    const votar = (id) => {
        console.log("votar - app", id)
        socket.emit('votar-banda', { id })
    }

    const borrar = (id) => {
        socket.emit('borrar-banda', { id })
    }

    const createRows = () => {
        return (
            bands.map(band => (

                <tr key={band.id}>
                    <td>
                        <button className='btn btn-primary' onClick={() => votar(band.id)}> +1 </button>
                    </td>
                    <td>
                        <input className='form-control' value={band.name} onChange={(event) => cambioNombre(event, band.id)} onBlur={() => onPerdioFoco(band.id, band.name)} />
                    </td>
                    <td><h3>{band.votes}</h3></td>
                    <td>
                        <button className='btn btn-danger' onClick={() => borrar(band.id)}> borrar</button>
                    </td>
                </tr>

            ))

        )
    }
    return (
        <>
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {createRows()}
                </tbody>
            </table>
        </>
    )
}

export default BandList
