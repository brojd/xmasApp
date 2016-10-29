import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import App from './route_components/App/App.component';
import Profile from './route_components/Profile/Profile.component';
import MyMatch from './route_components/MyMatch/MyMatch.component';
import Group from './route_components/Group/Group.component';
import Rules from './route_components/Rules/Rules.component';
import './index.css';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Profile} />
      <Route path="match" component={MyMatch} />
      <Route path="group" component={Group} />
      <Route path="rules" component={Rules} />
    </Route>
  </Router>,
  document.getElementById('root')
);
