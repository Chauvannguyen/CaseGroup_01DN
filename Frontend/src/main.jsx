import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router";
import BookList from "./Pages/BookList.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(

      <BrowserRouter>
          <App />
      </BrowserRouter>
)
