import React from 'react';
import './App.css';
import { ThemeProvider} from '@material-ui/core';
import Theme from './themes/Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import  AppRoutes from './routes';

function App() {
  return (
    
    <ThemeProvider theme={Theme}>
      <Router>
        <AppRoutes />
        </Router>
      </ThemeProvider>
     

  );
}

export default App;
