import React from 'react';

function Question(props) {
  return (
    <div>
      {props.currentQuiz.question}
    </div>
  )
}

export default Question