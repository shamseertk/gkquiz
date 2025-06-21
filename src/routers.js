import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DumbCharade from './container/DumbCharade'
import Login from './container/Login'
import Register from './container/Register'
import Quiz from './container/Quiz'
import SpellingGame from './container/SpellingGame'
import SpellingBee from './container/SpellingBee'
import TicTacToe from './container/TicTacToe'

function Routers() {
  return <Routes>
    <Route path="/" element={<SpellingGame />} />
    <Route path="/quiz" element={<Quiz />} />
    <Route path="dumb-charade" element={<DumbCharade />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="spelling-bee" element={<SpellingBee />} />
    <Route path="tictactoe" element={<TicTacToe />} />
  </Routes>
}

export default Routers;
