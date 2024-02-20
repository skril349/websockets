import React, { useRef, useEffect, useState } from 'react'
import "./MapPage.css"
import { useMapbox } from '../hooks/useMapbox';

const puntoInicial = {
    lng:2.1553,
    lat:41.3815,
    zoom: 18.34
}

const MapaPage = () => {

        const {coords,setRef,nuevoMarcador$,movimientoMarcador$} = useMapbox(puntoInicial)

        useEffect(()=>{
            nuevoMarcador$.subscribe(marcador =>{
            })
        },[nuevoMarcador$])

        useEffect(()=>{
            movimientoMarcador$.subscribe(movimientoMarcador =>{
            })
        },[movimientoMarcador$])
    
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
