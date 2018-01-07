import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader';
import IndexPage from './pages';
import AskPage from './pages/ask';
import JobsPage from './pages/jobs';
import ShowPage from './pages/show';
import NewestPage from './pages/newest';
import './App.css';
import './Gatsby.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Route exact path="/" component={IndexPage} />
          <Route path="/newest" component={NewestPage} />
          <Route path="/newcomments" render={() => (<div>newcomments</div>)} />
          <Route path="/show" component={ShowPage} />
          <Route path="/ask" component={AskPage} />
          <Route path="/jobs" component={JobsPage} />
          <Route path="/submit" render={() => (<div>submit</div>)} />
        </div>
      </Router>
    );
  }
}

export default App;
