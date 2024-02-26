import React from 'react'
import { AppRouter } from './router/AppRouter'
import AuthProvider from './auth/AuthContext'
import { SocketProvider } from './context/SocketContext'

const ChatApp = () => {
  return (
    <AuthProvider>
      <SocketProvider>
      <AppRouter/>
      </SocketProvider>
    </AuthProvider>
  )
}

export default ChatApp
