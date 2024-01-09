import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"

import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/about" element={<About />} />
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
