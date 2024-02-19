import React from 'react'
import RouterPage from './pages/RouterPage'
import { UiProvider } from './context/UiContext'

const TicketApp = () => {
  return (
    <UiProvider>
      <RouterPage/>
    </UiProvider>
  )
}

export default TicketApp
