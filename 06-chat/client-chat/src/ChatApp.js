import React from 'react'
import { AppRouter } from './router/AppRouter'
import AuthProvider from './auth/AuthContext'

const ChatApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default ChatApp
