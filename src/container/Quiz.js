import React, {useState, useEffect} from 'react';
import '../App.css';
import Question from '../Question';
import { generateRandomNumber } from '../utils/utils';
import Options from '../AnswerOptions'
import { Button } from '@mui/material';
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from '../services/fb';
import _ from 'lodash';
import Players from '../components/Players';
import PageTitle from '../components/common/PageTitle';

function handleAnswerChange(event, qzIndx, currentQuiz, setQzIndx, setStatus, setSelectedAnswer, setSelectedIndex){
  setSelectedAnswer(event.target.value);
  if (event.target.value === currentQuiz.answer) {
    setStatus('Right');
  } else {
    setStatus('Wrong');
  }
}

function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const getQuizDocs = async () => {
    const locQuizzes = [];
    const querySnapshot = await getDocs(collection(db, "quiz"));
    querySnapshot.forEach((doc) => {
      locQuizzes.push({ id: doc.id, ...doc.data() });
    });
    setQuizzes(_.shuffle(locQuizzes));
  }
  useEffect(() => {
    if (quizzes.length < 1) {
      getQuizDocs();
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps
  const [qzIndx, setQzIndx] = useState(-1);
  const [currentQuiz, setCurrentQuiz] = useState(quizzes[qzIndx]);
  const [status, setStatus] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState();
  useEffect(() => {
    setSelectedAnswer();
    setCurrentQuiz(quizzes[qzIndx]);
    quizzes.splice(qzIndx, 1);
  }, [qzIndx, quizzes]);
  return <div>
    <PageTitle title="Quiz" />
    <Players />
    <Button onClick={() => setQzIndx(0)}>Start the Quiz</Button>
    <div className="question">
      {<Question currentQuiz={currentQuiz} /> }
    </div>
    {<div className="answer">
      <Options
        currentQuiz={currentQuiz}
        status={status}
        selectedAnswer={selectedAnswer}
        handleAnswerChange={(event) => handleAnswerChange(event, qzIndx, currentQuiz, setQzIndx, setStatus, setSelectedAnswer)} />
    </div>}
    <Button disabled={quizzes.length === 1} onClick={() => setQzIndx(generateRandomNumber(quizzes.length - 1))}>Next Question</Button>
  </div>
}

export default Quiz;
