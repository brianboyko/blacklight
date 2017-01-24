import {
  SHOW_JEOPARDY
} from '../constants/index';


export function jeopardy(state = {
  question: "question",
  answer: "answer",
  value: 0,
  category: "category"
}, action = {}) {
  switch (action.type) {
  case SHOW_JEOPARDY:
    return {
      question: action.question,
      answer: action.answer,
      value: action.value,
      category: action.category
    };
  default:
    return state;
  }
}
