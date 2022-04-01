import React, {useState, useEffect} from 'react';
import '../App.css';
import Question from '../Question';
import { quiz } from '../data';
import { generateRandomNumber } from '../utils/utils';
import Options from '../AnswerOptions'
import { Button } from '@mui/material';

const tempQuiz = JSON.parse(JSON.stringify(quiz));

function handleAnswerChange(event, qzIndx, currentQuiz, setQzIndx, setStatus, setSelectedAnswer, setSelectedIndex){
  setSelectedAnswer(event.target.value);
  if (event.target.value === currentQuiz.answer) {
    setStatus('Right');
  } else {
    setStatus('Wrong');
  }
}
function Quiz() {
  const [qzIndx, setQzIndx] = useState(generateRandomNumber(tempQuiz.length - 1));
  const [currentQuiz, setCurrentQuiz] = useState(tempQuiz[qzIndx]);
  const [status, setStatus] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState();
  useEffect(() => {
    setSelectedAnswer();
    setCurrentQuiz(tempQuiz[qzIndx]);
    tempQuiz.splice(qzIndx, 1);
  }, [qzIndx])
  return <div>
      <div className="question">
        <Question currentQuiz={currentQuiz} />
      </div>
      <div className="answer">
        <Options
          currentQuiz={currentQuiz}
          status={status}
          selectedAnswer={selectedAnswer}
          handleAnswerChange={(event) => handleAnswerChange(event, qzIndx, currentQuiz, setQzIndx, setStatus, setSelectedAnswer)} />
      </div>
      <Button onClick={() => setQzIndx(generateRandomNumber(tempQuiz.length - 1))}>Next Question</Button>
    </div>
}

export default Quiz