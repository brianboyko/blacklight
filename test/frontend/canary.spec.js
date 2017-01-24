import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;

import {canary} from '../../src/frontend/js/canary';

describe('Canary Test', function(){
  it("correctly processes a simple ES6 function", function(){
    expect(canary()).to.equal("canary");
  });
});
