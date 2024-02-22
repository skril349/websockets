import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate

} from "react-router-dom"
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ChatPage from '../pages/ChatPage'

export const AppRouter = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route path='/login' Component={LoginPage}/>
                <Route path='/register' Component={RegisterPage}/>
                <Route path='/' Component={ChatPage}/>
                <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    </Router>
  )
}

