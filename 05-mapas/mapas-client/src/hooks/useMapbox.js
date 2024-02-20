import { useRef, useEffect, useState, useCallback } from 'react'
import mapboxgl from "mapbox-gl"
import {v4} from "uuid"
mapboxgl.accessToken = "pk.eyJ1Ijoic2tyaWwzNDkiLCJhIjoiY2xzdWttbTgxMGFyZjJpbzFqZWFkcnoyaSJ9.EgLd1JiAJ733Cw1etCOgkQ";

export const useMapbox = ( puntoInicial ) => {
    const mapaDiv = useRef(); 
    const setRef = useCallback((node) =>{
        mapaDiv.current = node;
    },[])
    // const [mapa, setMapa] = useState()
    const mapa = useRef();
    const [coords, setCoords] = useState(puntoInicial)

    useEffect(() => {
        var map = new mapboxgl.Map({
            container:mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center:[puntoInicial.lng,puntoInicial.lat],
            zoom:puntoInicial.zoom
        })

        mapa.current  = map;
    }, [puntoInicial])


    //Listener movimiento mapa
    useEffect(()=>{
        mapa.current?.on("move",() => {

            const {lng, lat} = mapa.current.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: mapa.current.getZoom().toFixed(2)
            })
        })
    },[])

    //Agregar Marcadores al hacer click
    useEffect(()=>{
        mapa.current?.on("click",( ev ) => {

            const {lng, lat} = ev.lngLat;
            const marker = new mapboxgl.Marker();
            marker.id = v4();

            marker.setLngLat([lng, lat]).addTo(mapa.current).setDraggable(true)


           
        })
    },[])


  return{
    coords,
    setRef
  }
}

