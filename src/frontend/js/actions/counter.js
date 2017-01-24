import {
  INCREMENT_COUNTER, CLEAR_COUNTER, DOUBLE_COUNTER,
} from '../constants/index';

export const addOne = () => ({ type: INCREMENT_COUNTER });
export const clear = () => ({ type: CLEAR_COUNTER });
export const doubleIt = () => ({ type: DOUBLE_COUNTER });
