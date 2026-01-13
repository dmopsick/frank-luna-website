import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#1976D2',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Router />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
