import React, { useState } from 'react'
import {Route, Routes} from "react-router";
import BookList from "./Pages/BookList.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
      <>
          <Routes>
              <Route path="/Login" element={<Login />}/>
              <Route path="/" element={<BookList />} />
              <Route path="/Home" element={<Home />} />
          </Routes>
      </>
  )
}
export default App
