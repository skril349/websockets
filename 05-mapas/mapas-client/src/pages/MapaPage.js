import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from "mapbox-gl"
import "./MapPage.css"
mapboxgl.accessToken = "pk.eyJ1Ijoic2tyaWwzNDkiLCJhIjoiY2xzdWttbTgxMGFyZjJpbzFqZWFkcnoyaSJ9.EgLd1JiAJ733Cw1etCOgkQ";

const puntoInicial = {
    lng:2.1553,
    lat:41.3815,
    zoom: 18.34
}

const MapaPage = () => {

    const mapaDiv = useRef();

    const [mapa, setMapa] = useState(null)
    const [coords, setCoords] = useState(puntoInicial)

    useEffect(() => {
        var map = new mapboxgl.Map({
            container:mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center:[puntoInicial.lng,puntoInicial.lat],
            zoom:puntoInicial.zoom
        })

        setMapa(map)
    }, [])


    //Listener movimiento mapa
    useEffect(()=>{
        mapa?.on("move",() => {

            const {lng, lat} = mapa.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: mapa.getZoom().toFixed(2)
            })
        })
    },[mapa])

    return (
        <>

        <div className='info'>
            Lng: {coords.lng} | lat: {coords.lat} | zoom: {coords.zoom}
        </div>

            <div
                className='mapContainer'
                ref={mapaDiv}
            />

        </>
    )
}

export default MapaPage
