import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const expect = chai.expect;
import request from 'supertest';
import express from 'express';
const testApp = express();
import http from 'http';
import routes from '../../src/backend/routes';
import sinon from 'sinon';

describe('loading express', function () {
  let testApp;
  let testServer;
  beforeEach(function () {
    testApp = express();
    testServer = http.Server(testApp);
    routes(testServer, testApp);
  });
  afterEach(function (done) {
    testServer.close(done);
  });
  it('responds to /', function (done) {
    request(testServer)
      .get('/')
      .expect(200, done);
  });
  it('404 everything else', function (done) {
    request(testServer)
      .get('/foo/bar')
      .expect(404, done);
  });
  it('serves the homepage', function(done){
    this.timeout(10000);
    const getHomePage = () => new Promise((resolve, reject) => {
      request(testServer)
      .get('/')
      .end((err, res) => {
        if(err){
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
    expect(getHomePage().then((response) => response.text.substring(0, 15))).to.eventually.equal("<!DOCTYPE html>").notify(done);
  });
});
