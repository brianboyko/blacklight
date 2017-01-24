import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;
import {
  INCREMENT_COUNTER, CLEAR_COUNTER, DOUBLE_COUNTER,
} from '../../../src/frontend/js/constants/index';

import {counter} from '../../../src/frontend/js/reducers/counter';

describe('reducers:counter', function(){
  it('defaults to 0', function(){
    expect(counter()).to.equal(0);
  });
  it('adds one', function(){
    expect(counter(7, {type: INCREMENT_COUNTER})).to.equal(8);
  });
  it('doubles', function(){
    expect(counter(9, {type: DOUBLE_COUNTER})).to.equal(18);
  });
  it('clears', function(){
    expect(counter(10, {type: CLEAR_COUNTER})).to.equal(0);
  });
});
