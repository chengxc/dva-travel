/* eslint-disabled */
import React from 'react';
/* eslint-disabled */
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import My from './components/My';
import Suggest from './components/Suggest';
import Customer from './components/Customer';
import Train from './components/Train/index';
import TrainList from './components/TrainList/index';
import TrainDetail from './components/TrainDetail/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/customer" exact component={Customer} />
        <Route path="/my" exact component={My} />
        <Route path="/suggest" exact component={Suggest} />
        <Route path="/train" exact component={Train} />
        <Route path="/trainlist/:origin/:dest/:date/:isHighway" exact component={TrainList} />
        <Route path="/traindetail/:origin/:dest/:date/:trainNumber/:begin/:end/" exact component={TrainDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
