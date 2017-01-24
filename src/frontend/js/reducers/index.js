// ==========================
// ./reducers/index.js
// ==========================

import { combineReducers } from 'redux';
import * as counter from './counter';
import * as jeopardy from './jeopardy';
import { routerReducer } from 'react-router-redux';

//Should create a object with multiple function keys.
//Example: {routing: routerReducer, language: (the function exported from language.js),
//	currency: (the function exported from currency.js)}. - GMDIV
const appReducer = combineReducers(Object.assign({}, {routing: routerReducer}, counter, jeopardy));

//Should apply two parameters called state and action to all functions within
//the object created in appReducer that use the parameters of state and action. - GMDIV
const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
