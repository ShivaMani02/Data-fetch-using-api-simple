import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from './App.js';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <>
    <h1>Table Entries</h1>
    <App />
    </>
      
    
  </StrictMode>,
  rootElement
);
