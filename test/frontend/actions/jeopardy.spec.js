import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;
import {
  SHOW_JEOPARDY,
} from '../../../src/frontend/js/constants/index';

import {showJeopardy} from '../../../src/frontend/js/actions/jeopardy';

describe('actions:jeopardy', function(){
  it('makes an action to add a jeopardy question', function(){
    expect(showJeopardy({
      answer: "foo",
      question: "bar",
      category: {
        title: "baz",
      },
      value: 3,
    })).to.eql({
      type: SHOW_JEOPARDY,
      answer: "foo",
      question: "bar",
      category: "baz",
      value: 3,
    });
  });
});
