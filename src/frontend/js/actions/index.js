import * as counter from './counter';
import * as jeopardy from './jeopardy'
import { push } from 'react-router-redux';

export default Object.assign({}, counter, jeopardy, { push });
