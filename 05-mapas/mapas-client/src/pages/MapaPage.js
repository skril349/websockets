import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from "mapbox-gl"
import "./MapPage.css"
mapboxgl.accessToken = "pk.eyJ1Ijoic2tyaWwzNDkiLCJhIjoiY2xzdWttbTgxMGFyZjJpbzFqZWFkcnoyaSJ9.EgLd1JiAJ733Cw1etCOgkQ";

const puntoInicial = {
    lng:5,
    lat:34,
    zoom:2
}

const MapaPage = () => {

    const mapaDiv = useRef();

    const [mapa, setMapa] = useState(null)

    useEffect(() => {
        var map = new mapboxgl.Map({
            container:mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center:[puntoInicial.lng,puntoInicial.lat],
            zoom:puntoInicial.zoom
        })

        setMapa(map)
    }, [])

    return (
        <>

            <div
                className='mapContainer'
                ref={mapaDiv}
            />

        </>
    )
}

export default MapaPage
