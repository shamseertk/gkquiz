import React from 'react';

function Question(props) {
  return (
    <div>
      {props.currentQuiz && props.currentQuiz.question}
    </div>
  )
}

export default Question