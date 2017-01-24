// ==========================
// ./actions/index.js
// ==========================
import { push } from 'react-router-redux';
import * as todosActions from './todosActions';


export default Object.assign({}, todosActions, { push });
