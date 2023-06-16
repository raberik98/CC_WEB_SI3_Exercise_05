import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.scss"

import Shop from "./pages/Shop";
import About from "./pages/About";

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
