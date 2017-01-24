import React, { Component } from 'react';
import request from 'request';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, {routeTo} from './js/store/configureStore';
import App from './js/containers/App';
import Counter from './js/containers/Counter';
import Jeopardy from './js/containers/Jeopardy';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, push} from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);
const MOUNT_NODE = document.getElementById('root');

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider routeTo={routeTo} store={store}>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={Counter}/>
              <Route path="jeopardy" component={Jeopardy}/>
            </Route>
          </Router>
      </Provider>
    );
  }
}


ReactDOM.render(<Root store={store} />, MOUNT_NODE);
