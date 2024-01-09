import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"

import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";

import { ToastContextProvider } from './contects/ToastContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ToastContextProvider/>}>
          <Route path="/" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
