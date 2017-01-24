import {
  INCREMENT_COUNTER, CLEAR_COUNTER, DOUBLE_COUNTER,
} from '../constants/index';


export function counter (state = 0, action = {}) {
  switch(action.type){
  case INCREMENT_COUNTER:
    return state + 1;
  case CLEAR_COUNTER:
    return 0;
  case DOUBLE_COUNTER:
    return state * 2;
  default: return state;
  }
}
