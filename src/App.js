import React from 'react';
// import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CertificationList from './app/modules/learningPortal/certificationSummary/containers/list/CertificationList';
import TestBed from './app/modules/poc/containers/testBeb/testBed';

function App() {
  return (
    <div className="App">
      {/* <Content> */}
      <Router>
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
