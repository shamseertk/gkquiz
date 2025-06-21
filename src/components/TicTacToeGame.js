import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import RefreshIcon from '@mui/icons-material/Refresh';

const TicTacToeGame = (props) => {
    const [boxValue, setBoxValue] = useState([
        ['','',''],
        ['','',''],
        ['','',''],
    ]);
     

    const statement = "The winner is ";
    const [finalStatement, setFinalStatement] = useState();
    const win = (letter) => {
        setFinalStatement(statement + letter);
        if(letter==="tie"){
            setFinalStatement("It is a tie!")
            
        }
    }
    const [expression, setExpression] = useState(true)
    const [turn, setTurn] = useState(0);
    const checkWin = () => {
        if(boxValue[1][1] !== ""){
            if(boxValue[0][0]===boxValue[1][1] && boxValue[1][1] === boxValue[2][2]){
                endGame()
                return boxValue[1][1]
            }
            if(boxValue[1][1]===boxValue[0][1] && boxValue[2][1]===boxValue[1][1]){
                endGame()
                return boxValue[1][1]
            }
            if(boxValue[1][1]===boxValue[0][2] && boxValue[2][0]===boxValue[1][1]){
                endGame()
                return boxValue[1][1]
            }
            if(boxValue[1][1]===boxValue[1][0] && boxValue[1][2]===boxValue[1][1]){
                endGame()
                return boxValue[1][1]
            }
        }
        

        if(boxValue[0][1]!== ""){
            if(boxValue[0][0] === boxValue[0][2] && boxValue[0][0] === boxValue[0][1]){
                endGame()
                return boxValue[0][1]
            }
        }
        else if(boxValue[1][0]!== ""){
            if(boxValue[1][0] === boxValue[0][0] && boxValue[2][0] === boxValue[1][0]){
                endGame()
                return boxValue[1][0]
            }
        }
        else if(boxValue[1][2]!== ""){
            if(boxValue[1][2] === boxValue[2][2] && boxValue[1][2] === boxValue[0][2]){
                endGame()
                return boxValue[1][2]
            }
        }
        else if(boxValue[2][1]!== ""){
            if(boxValue[2][1] === boxValue[2][2] && boxValue[2][1] === boxValue[2][0]){
                endGame()
                return boxValue[2][1]

            }
        }
        if(boxValue[0][0]!=="" && boxValue[0][1] !== "" && boxValue[0][2] !== "" && boxValue[1][0] !== "" && boxValue[1][1] !== "" && boxValue[1][2] !== "" && boxValue[2][0] !== "" && boxValue[2][1] !== "" && boxValue[2][2] !== ""){
                console.log("tie")
                endGame()
                return "tie"
            
        }
        
        return false
            
    }
    const endGame = () => {
        setExpression(false)
    }
    const playAndCheckWin = (rI, cI) => {
        if(expression){
            playedOn(rI, cI)
        }
        if(checkWin() !== false){
            win(checkWin())
            
        }
    }
    const playedOn = (rI, cI) => {
        if(expression){

            if(boxValue[rI][cI]!=="X" && boxValue[rI][cI]!=="O"){
                
                setTurn(turn + 1);
                boxValue[rI][cI] = turn % 2 === 1 ? 'O' : 'X';
            }
        }
    }
    const restart = (props) => {
        setTurn(0)
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                boxValue[i][j] = ""
            }
        }
        setFinalStatement("");
        setExpression(true)
    }

    return <div>
       { 
            boxValue.map((boxes, rowInd) => <div style={{display: 'flex'}}>
                {boxes.map((box, colIndex) => <button onClick={() => playAndCheckWin(rowInd, colIndex)} style={{height: '90px', width: '90px'}}>{box}</button>)}
                </div>
            )
        }
        <p>{finalStatement}</p>
        {/* (<button onClick={() => restart() }>Restart</button>) */}
        <Fab 
        color="primary" 
        aria-label="refresh" 
        onClick={() => restart()}>
        <RefreshIcon />
        </Fab>
        
    </div>
}

export default TicTacToeGame;