import './App.css';
import Router from "./Router";
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Header from './components/Header';
import Footer from './components/Footer';

const theme = createTheme({
  pallete: {
    primary : {
      main: "#000000"
    },
    secondary: {
      main: "#a7171a"
    }
  }
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
