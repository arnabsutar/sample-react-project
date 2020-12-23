import React from 'react';
// import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import CertificationList from './app/modules/learningPortal/certificationSummary/containers/list/CertificationList';
import TestBed from './app/modules/poc/containers/testBeb/testBed';
import NotFound from './app/common/components/NotFound';

function App() {
  return (
    <div className="App" data-test="AppComponent">
      {/* <Content> */}
      <Router>
        <Switch>
          <Route exact path="/" component={TestBed} />
          <Route exact path="/certificates" component={CertificationList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      {/* </Content> */}
    </div>
  );
}

export default App;
