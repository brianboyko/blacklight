import {
  SHOW_JEOPARDY
} from '../constants/index';
import _ from 'lodash';


export function jeopardy(state = {
  question: "question",
  answer: "answer",
  value: 0,
  category: "category"
}, action = {}) {
  switch (action.type) {
  case SHOW_JEOPARDY:
    return _.omit(action, "type");
  default:
    return state;
  }
}
