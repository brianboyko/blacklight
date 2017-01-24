import reduxify from 'reduxify';
import * as actions from '../actions/index';
import React, {Component} from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (<div>
      <div>The current count is: {this.props.counter}</div>
      <div style={{textDecoration: 'underline', color: '#000088'}} onClick={this.props.actions.addOne}>Increment</div>
      <div style={{textDecoration: 'underline', color: '#000088'}} onClick={this.props.actions.doubleIt}>Double</div>
      <div style={{textDecoration: 'underline', color: '#000088'}} onClick={this.props.actions.clear}>Clear</div>
    </div>
    );
  }
}

export default reduxify(actions, ['counter'], Counter);
