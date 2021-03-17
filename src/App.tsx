import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './themes/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <header className="App-header">
        Welcome to POS project
      </header>
    </div>
    </ThemeProvider>

  );
}

export default App;
