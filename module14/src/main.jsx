import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#20B15A",
      light: "#5fb380",
      dark: "#199a4d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#D7F5DC",
      light: "#ecfbef",
      dark: "#93be9b",
      contrastText: "#fff",
    },
    typography: {
      fontFamily: "Poppins",
      button: {
        fontFamily: "Poppins",
      },
    },
  },
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
