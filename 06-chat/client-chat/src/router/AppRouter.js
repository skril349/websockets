import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/ChatPage';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {

    const {auth, verificarToken} = useContext(AuthContext)

    useEffect(()=>{
        verificarToken();
    },[verificarToken])

    if(auth.checking){
        return <h1>Espere por favor</h1>
    }

    return (
        <Router>
            <div>
                <Routes>
                    {/* <Route path="/auth/*" element={<AuthRouter />} /> */}
                    <Route path="/auth/*" element={
                        <PublicRoute isAuthenticated={auth.logged}>
                            <AuthRouter />
                        </PublicRoute>
                    } />
                    <Route exact path="/" element={
                        <PrivateRoute isAuthenticated={auth.logged}>
                            <ChatPage />
                        </PrivateRoute>
                    } />       
                    <Route path='*' element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
};
