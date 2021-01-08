import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// component based imports go below library imports and have relative paths 

import NavBar from './NavBar/NavBar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'
import PortfolioDetail from './portfolio/portfolio-detail'
import Auth from './pages/auth'
import NoMatch from './pages/no-match'






export default class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
  }

}


handleSuccessfulLogin = () => {
  this.setState({
    loggedInStatus: "LOGGED_IN"
  });
}

handleUnSuccessfulLogin = () => {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}

  render () {
    
    return (
      <div className='container'>
        <Router>
          <div>
          
            <NavBar />
            <h2>{this.state.loggedInStatus}</h2>
            <Switch>
              {/* root route  */}
              <Route exact path='/' component={Home} />
              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              />
              <Route path='/about-me' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path='/portfolio:slug' component={PortfolioDetail} />
              
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

        
        
      </div>
    )
  }
}


