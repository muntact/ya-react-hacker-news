import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppHeader from './components/AppHeader'
import Page from './components/Page'
import CommentPage from './components/CommentPage'
import './App.css'
import './Gatsby.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <Route exact path="/" render={() => <Page api="topstories" />} />
          <Route path="/newest" render={() => <Page api="newstories" />} />
          <Route path="/newcomments" render={() => (<div>newcomments. TODO :D</div>)} />
          <Route path="/show" component={() => <Page api="showstories" />} />
          <Route path="/ask" component={() => <Page api="askstories" />} />
          <Route path="/jobs" component={() => <Page api="jobstories" />} />
          <Route path="/submit" render={() => (<div>submit. TODO :D</div>)} />
          <Route path="/item/:id" render={({ match }) => (<CommentPage item={match.params.id} />)} />
        </div>
      </Router>
    )
  }
}

export default App
