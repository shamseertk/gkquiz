import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DumbCharade from './container/DumbCharade'
import Quiz from './container/Quiz'

function Routers() {
  return <Routes>
    <Route path="/" element={<Quiz />} />
    <Route path="dumb-charade" element={<DumbCharade />} />
  </Routes>
}

export default Routers