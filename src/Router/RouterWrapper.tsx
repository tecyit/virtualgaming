import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Dashboard } from '../Pages';
import { LOGIN, DASHBOARD } from './routes';

const RouterWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route path={DASHBOARD} component={Dashboard} />
        <Route exact path={LOGIN} component={Login} />
      </Switch>
    </Router>
  );
};

export default RouterWrapper;
