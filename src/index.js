import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import MainApp from './components/MainApp';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const history = createBrowserHistory();

ReactDOM.render(
  <Router path="/" history={ history }>
    <Switch>
      <Route path="/app" component={MainApp} />
      <Route path="/signin" component={ SignIn } />
      <Route path="/signup" component={ SignUp } />
    </Switch>
  </Router>, document.getElementById('root')
);

