import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const theme = createTheme({
  palette: {
    secondary: {
      main: "#34321",
    },
    primary: {
      main: "#f5f7fa",
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
