import React from 'react'
import MapaPage from './pages/MapaPage'
import { SocketProvider } from './context/SocketContext'

const MapasApp = () => {
  return (
    <SocketProvider>
      <MapaPage/>
    </SocketProvider>
  )
}

export default MapasApp
