import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/Mainpage";
import Shop from "./pages/Shop";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} /> 
        <Route path="/shop" element={<Shop />} />
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
