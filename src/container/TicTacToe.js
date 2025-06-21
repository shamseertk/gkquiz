import PageTitle from "../components/common/PageTitle";
import TicTacToeGame from "../components/TicTacToeGame";
import React from "react";
const TicTacToe = (props) => {
  
  return <div>
    <PageTitle title="Tic-Tac-Toe" />
    <TicTacToeGame />
    
  </div>
}

export default TicTacToe;