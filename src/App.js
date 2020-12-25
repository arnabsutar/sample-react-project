import React from 'react';
// import { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import CertificationList from './app/modules/learningPortal/certificationSummary/containers/list/CertificationList';
import TestBed from './app/modules/poc/containers/testBeb/testBed';
import appHistory from './app/common/util/appHistory';

function App() {
  return (
    <div className="App">
      {/* <Content> */}
      <Router history={appHistory}>
        <Switch>
          <Route exact path="/" component={TestBed} />
          <Route exact path="/certificates" component={CertificationList} />
        </Switch>
      </Router>
      {/* </Content> */}
    </div>
  );
}

export default App;
