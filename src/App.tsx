import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import Theme from './themes/Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { ProvideAuth } from './auth';

function App() {
    return (
        <ProvideAuth>
            <ThemeProvider theme={Theme}>
                <Router>
                    <AppRoutes />
                </Router>
            </ThemeProvider>
        </ProvideAuth>
    );
}

export default App;
