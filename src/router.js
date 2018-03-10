/* eslint-disabled */
import React from 'react';
/* eslint-disabled */
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import My from './components/My';
import Suggest from './components/Suggest';
import Customer from './components/Customer';
import Topic from './components/Topic/Topic';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/my" exact component={My} />
        <Route path="/suggest" exact component={Suggest} />
        <Route path="/topic/:id" exact component={Topic} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
