import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DumbCharade from './container/DumbCharade'
import Login from './container/Login'
import Register from './container/Register'
import Quiz from './container/Quiz'

function Routers() {
  return <Routes>
    <Route path="/" element={<Quiz />} />
    <Route path="dumb-charade" element={<DumbCharade />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Routes>
}

export default Routers