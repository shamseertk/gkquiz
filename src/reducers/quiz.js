import {
  FETCH_QUIZ
} from '../constants/quiz';

[FETCH_QUIZ]: () => {
  ...state,
  quizzes: payload.data,
}