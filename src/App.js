import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Route exact path="/" render={() => (<div>Home</div>)} />
          <Route path="/newest" render={() => (<div>newest</div>)} />
          <Route path="/newcomments" render={() => (<div>newcomments</div>)} />
          <Route path="/show" render={() => (<div>show</div>)} />
          <Route path="/ask" render={() => (<div>ask</div>)} />
          <Route path="/jobs" render={() => (<div>jobs</div>)} />
          <Route path="/submit" render={() => (<div>submit</div>)} />
        </div>
      </Router>
    );
  }
}

export default App;
