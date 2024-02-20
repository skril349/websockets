import React, { useRef, useEffect, useState, useContext } from 'react'
import "./MapPage.css"
import { useMapbox } from '../hooks/useMapbox';
import { SocketContext } from '../context/SocketContext';

const puntoInicial = {
    lng:2.1553,
    lat:41.3815,
    zoom: 18.34
}

const MapaPage = () => {

        const {coords,setRef,nuevoMarcador$,movimientoMarcador$, agregarMarcador} = useMapbox(puntoInicial)
        const {socket} = useContext(SocketContext)

        //Escuchar los marcadores existentes
        useEffect(()=>{
                socket.on('marcadores-activos', (marcadores)=>{

                    for(const key of Object.keys(marcadores)){
                        console.log(marcadores[key])
                        agregarMarcador(marcadores[key], key)

                    }


                })
        },[nuevoMarcador$, agregarMarcador])

        useEffect(()=>{
            nuevoMarcador$.subscribe(marcador =>{
                socket.emit('marcador-nuevo', marcador)
            })
        },[nuevoMarcador$])

        useEffect(()=>{
            movimientoMarcador$.subscribe(movimientoMarcador =>{

            })
        },[movimientoMarcador$])

        useEffect(()=>{
            socket.on('marcador-nuevo', (marcador)=>{
                agregarMarcador(marcador, marcador.id)
            })
        },[socket, agregarMarcador])
    
    return (
        <>

        <div className='info'>
            Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
        </div>

            <div
                className='mapContainer'
                ref={setRef}
            />

        </>
    )
}

export default MapaPage
