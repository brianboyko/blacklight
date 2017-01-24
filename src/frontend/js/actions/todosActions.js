// ==========================
// ./actions/todosActions.js
// ==========================
import {
  ADD_TODO, DELETE_TODO, CROSS_TODO
} from '../constants/index';

// all text rendered in the browser should be lowercase.
export const addTodo = (text) => ({
  type: ADD_TODO,
  text: text.toLowerCase(),
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});

export const crossTodo = (index) => ({
  type: CROSS_TODO,
  index,
});
