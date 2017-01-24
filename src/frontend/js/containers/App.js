import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';
import request from 'request';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div ref="App">
        {this.props.children}
      </div>
    );
  }
}

export default reduxify(actions, ['jeopardy'], App);
