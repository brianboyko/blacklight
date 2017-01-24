// ==========================
// ./reducers/todoReducer.js
// ==========================

import {
  ADD_TODO,
  DELETE_TODO,
  CROSS_TODO
} from '../constants/index';


export function todos(state = [], action = {}) {
  switch (action.type) {
  case ADD_TODO:
    return state.concat({
      completed: false,
      text: action.text
    });
  case DELETE_TODO:
    return state.slice(0, action.index).concat(state.slice(action.index + 1));

  //While
    // state[action.index].completed = !state[action.index].completed;
    // return state;
  // is an "easier" way to do this,
  // it violates functional programming principles and mutates the state directly.
  case CROSS_TODO:
    return state.slice(0, action.index)
      .concat(Object.assign(state[action.index], {
        completed: !state[action.index].completed
      }))
      .concat(state.slice(action.index + 1));
  default:
    return state;
  }
}
