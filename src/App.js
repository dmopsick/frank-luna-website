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
      main: '#a7171a',
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
