// ==========================
// ./containers/TodoList.js
// ==========================

import React, { Component } from 'react';
import * as actions from '../actions/index';
import reduxify from 'reduxify';

// Material UI looks good and you can develop for it quickly.  Might as well use it.
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

// We use inline styles here because they work really well with React's JSX
// If I wanted to get fancy, I could use either the 'aphrodite' npm library
// to create a dynamic inline styles object with all the power of a CSS preprocessor like SASS/LESS

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: "rgb(154, 154, 154)",
  },
  flexcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  button: {
    backgroundColor: '#e93333',
    borderRadius: '5px',
    color: 'white',
    padding: '4px 8px',
    margin: '2px',
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: '16px',
    lineHeight: '16px',
    alignItems: 'center',
    display: 'flex'
  },
  flex: {
    margin:'auto',
  },
  theTodo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

// This could be factored out into it's own file,
// but since Todo and Todos are so closely related, it makes sense to put them together.

class TodoList extends Component {
  constructor(props){
    super(props);
    // why use a state here when we have redux? Mostly because the changes here are
    // conceptually "local".
    this.state = {
      inputField: "",
      lockout: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.submitInput = this.submitInput.bind(this);
    this.handleCross = this.handleCross.bind(this);
  }
  /**
   * handleInput is how the inputField state gets manipulated.
   */
  handleInput (event) {
    this.setState({inputField: event.target.value});
  }
  /**
   * handleKeyPress listens for an "enter key" press, and when it
   * finds one, it triggers the submitInput method.
   */
  handleKeyPress (target) {
    if(target.charCode === 13){
      this.submitInput();
    }
  }
  /**
   * handleKeyPress listens for an "enter key" press, and when it
   * finds one, it triggers the submitInput method.
   */
  handleCross(index) {
    this.props.actions.crossTodo(index);
  }
  /**
   * On an submission, we dispatch the current input field into the reducer
   * via the addTodo action, then clear the text field.
   */
  submitInput () {
    this.props.actions.addTodo(this.state.inputField);
    this.setState({inputField: ""});
  }
  render () {
    return (
    <div style={styles.flexcontainer}>
      <div style={styles.flex}>
        <h1>todos</h1>
        <TextField id="inputField" floatingLabelText="what needs to be done?" type="text" value={this.state.inputField} onKeyPress={this.handleKeyPress} onChange={this.handleInput}/>
        <List>
          {this.props.todos.length ? this.props.todos.map((todo, index) =>
            <div style={styles.theTodo}>
            <ListItem
              key={"key" + index}
              leftCheckbox={
                <Checkbox onCheck={this.handleCross.bind(this, index)} checked={todo.completed}/>
              }
              primaryText={
                  <div style={todo.completed ? styles.complete : null}>
                  {todo.text}
                  </div>
              }>
            </ListItem>
            <div style={styles.button} onClick={() => this.props.actions.deleteTodo(index)}>delete</div>
            </div>) : null}
        </List>
      </div>
    </div>);
  }
}

/**
 * I actually wrote the reduxify NPM module.
 * https://www.npmjs.com/package/reduxify
 * https://github.com/brianboyko/reduxify
 *
 * It takes three parameters - the object containing the actions, a list of the relevant reducers in
 *  the redux store (you omit the irrelevant ones so that you don't re-render when you don't have to),
 *  and the component itself.
 * It then returns a component with dispatch and state correctly matched to props, so you can access
 * actions via this.props.actions.* and redux keys via this.props.*
 *
 */
export default reduxify(actions, ['todos'], TodoList);
