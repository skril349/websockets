import React from 'react'
import { AppRouter } from './router/AppRouter'
import AuthProvider from './auth/AuthContext'
import { SocketProvider } from './context/SocketContext'
import ChatProvider from './context/chat/ChatContext'
import moment from "moment"
import "moment/locale/es"
moment.locale("es")
const ChatApp = () => {
  return (
    <ChatProvider>
      <AuthProvider>
      <SocketProvider>
      <AppRouter/>
      </SocketProvider>
    </AuthProvider>
    </ChatProvider>
  )
}

export default ChatApp
