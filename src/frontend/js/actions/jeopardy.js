import {
  SHOW_JEOPARDY
} from '../constants/index';
import _ from 'lodash';

export const showJeopardy = (jQuestion) => {
  return ({
    type: SHOW_JEOPARDY,
    answer: jQuestion.answer,
    question: jQuestion.question,
    value: jQuestion.value,
    category: jQuestion.category.title,
  });
};
