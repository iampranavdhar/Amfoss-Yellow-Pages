import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import CompletePageofMember from './CompletePageofMember';

function App() {
  return (
    <Router>
    <div className="App">
    <Header/>  {/* We are placing it because we wanna render it irrespective of the page. */}
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/memberdetail'>
            <CompletePageofMember/>
          </Route>
          <Route exact path='/amfoss-website' render ={() => (window.location='https://amfoss.in/')}/>
          <Route exact path='/amfoss-website-login' render ={() => (window.location='https://my.amfoss.in/login')}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
