import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;
import {
  SHOW_JEOPARDY
} from '../../../src/frontend/js/constants/index';

import {jeopardy} from '../../../src/frontend/js/reducers/jeopardy';

describe('reducers:jeopardy', function(){
  it('defaults to a blank', function(){
    expect(jeopardy()).to.eql({
      question: "question",
      answer: "answer",
      category: "category",
      value: 0,
    });
  });
  it('adds a jeopardy question', function(){
    expect(jeopardy(undefined, {
      type: SHOW_JEOPARDY,
      question: "foo",
      answer: "bar",
      category: "baz",
      value: 42
    })).to.eql({
      question: "foo",
      answer: "bar",
      category: "baz",
      value: 42
    });
  });
});
