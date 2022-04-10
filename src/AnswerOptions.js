import { FormControl, FormControlLabel, Radio, RadioGroup, FormLabel } from '@mui/material';
import _ from 'lodash';
import React from 'react'

function AnswerOptions(props) {
  let statusClassName = '';
  if (props.selectedAnswer !== undefined) {
    if (props.status === 'Right') {
      statusClassName = 'success';
    } else {
      statusClassName = 'error';
    }
  }
  return <div className="answer-options">
    <FormControl>
      <FormLabel>Answers:</FormLabel>
      <RadioGroup
        onChange={props.handleAnswerChange}
        >
        {props.currentQuiz && _.shuffle(props.currentQuiz.options).map(opt => <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt}
          className={opt === props.selectedAnswer ? statusClassName : (props.selectedAnswer !== undefined && opt === props.currentQuiz.answer) ? 'success' : ''} />)}
      </RadioGroup>
    </FormControl>
  </div>
}

export default AnswerOptions
