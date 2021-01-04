import React, { Component } from 'react';
import moment from 'moment'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// component based imports go below library imports and have relative paths 
import PortfolioContainer from './portfolio/portfolio-container'
import NavBar from './NavBar/NavBar'
import Home from './pages/home'
import About from './pages/about'





export default class App extends Component {
  render () {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavBar />
            <Switch>
              {/* root route  */}
              <Route exact path='/' component={Home} />
              <Route path='/about-me' component={About} />
            </Switch>
          </div>
        </Router>

        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    )
  }
}

