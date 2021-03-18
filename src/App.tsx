import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import Theme from './themes/Theme'
import ButtonComp from './components/Button/ButtonComp';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ButtonComp />
    </ThemeProvider>

  );
}

export default App;
