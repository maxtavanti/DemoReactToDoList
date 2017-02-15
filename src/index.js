import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/Main';
import HomePage from './components/pages/HomeComponent';
import ToDoListPage from './components/pages/ToDoListComponent';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="home" component={HomePage} />
      <Route path="to_do_list" component={ToDoListPage} />
      {/*
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={App}/>
      */}     
    </Route>
  </Router>), document.getElementById('app'));
