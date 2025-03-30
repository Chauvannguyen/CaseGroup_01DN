import React, { useState } from 'react'
import {Route, Routes} from "react-router";
import BookList from "./Pages/BookList.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  return (
      <>
          <Routes>
              <Route path="/Login" element={<Login />}/>
              <Route path="/" element={<BookList />} />
          </Routes>
      </>
  )
}
export default App
