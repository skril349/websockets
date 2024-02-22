import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/ChatPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/" element={<ChatPage />} />
                    <Route path='*' element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
};
