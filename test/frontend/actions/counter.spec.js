import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;
import {
  INCREMENT_COUNTER, CLEAR_COUNTER, DOUBLE_COUNTER,
} from '../../../src/frontend/js/constants/index';

import {addOne, clear, doubleIt} from '../../../src/frontend/js/actions/counter';

describe('actions:counter', function(){
  it('makes an action to add one', function(){
    expect(addOne()).to.eql({type: INCREMENT_COUNTER});
  });
  it('makes an action to clear the counter', function(){
    expect(clear()).to.eql({type: CLEAR_COUNTER});
  });
  it('makes an action to double the counter', function(){
    expect(doubleIt()).to.eql({type: DOUBLE_COUNTER});
  });
});
