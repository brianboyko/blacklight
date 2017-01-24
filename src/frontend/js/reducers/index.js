// ==========================
// ./reducers/index.js
// ==========================

import { combineReducers } from 'redux';
import {todos} from './todoReducer';
import { routerReducer } from 'react-router-redux';

const appReducer = combineReducers(Object.assign({}, {routing: routerReducer}, {todos}));

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
