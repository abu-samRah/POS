import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import Theme from './themes/Theme'
import ButtonComp from './components/Button/ButtonComp';

export interface ButtonProps {
  variant?: String;
}
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ButtonComp variant="contained"/>
    </ThemeProvider>

  );
}

export default App;
