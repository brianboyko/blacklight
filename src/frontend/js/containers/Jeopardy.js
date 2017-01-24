import reduxify from 'reduxify';
import * as actions from '../actions/index';
import React, {Component} from 'react';
import request from 'request';

class Jeopardy extends Component {
  constructor(props){
    super(props);
    this.componentWillMount.bind(this);
  }

  componentWillMount (){
    request('http://jservice.io/api/random', (error, res, body) => {
      this.props.actions.showJeopardy(JSON.parse(body)[0]);
    });
  }

  render () {
    return (<div>
        <div>category: {this.props.jeopardy.category}</div>
        <div>value: {this.props.jeopardy.value}</div>
        <div>Question: {this.props.jeopardy.question}</div>
        <div>Answer: {this.props.jeopardy.answer}</div>
      </div>
    );
  }
}

export default reduxify(actions, ['jeopardy'], Jeopardy);
