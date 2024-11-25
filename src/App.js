import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './Pages/Form'
import Form2 from './Pages/Form2'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/popup" element={<Form2 />} />
        </Routes>
    </div>
  )
}

export default App