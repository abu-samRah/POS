import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import Theme from './themes/Theme'
import Index from './components/LoginView';
export interface ButtonProps {
  variant?: String;
}
function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Index/>
    </ThemeProvider>

  );
}

export default App;
