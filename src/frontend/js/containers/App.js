// ==========================
// ./containers/App.js
// ==========================

import React, { Component } from 'react';
import * as actions from '../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TodoList from '../containers/TodoList';

export default (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <TodoList />
  </MuiThemeProvider>
);
