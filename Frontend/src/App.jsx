import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import BookList from "./Pages/BookList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
