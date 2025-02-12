import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Valentine from './Velentine'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Valentine />} />
        <Route path="/:name" element={<Valentine />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}
