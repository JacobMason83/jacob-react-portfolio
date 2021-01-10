import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// component based imports go below library imports and have relative paths 

import NavBar from './NavBar/NavBar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'
import PortfolioManager from './pages/portfolio-manager'
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
handleSuccessfulLogout = () => {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN"
  });
}

checkLoginStatus = () => {
  return axios.get('https://api.devcamp.space/logged_in', { withCredentials: true})
    .then(res => {
      const loggedIn = res.data.logged_in
      const loggedInStatus = this.state.loggedInStatus

      //if loggedIn and status Logge_In => return data
      // if loggedIn status Not_logged_in => updateState
      // if not loggedIn and status Logged_in => update state


      if(loggedIn && loggedInStatus === "LOGGED_IN") {
         return loggedIn
      } 
      else if(loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        })}
         else {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"  
          })
        }
      
      
      
    })
    .catch((err) => {
      console.log("Error", err)
    })
  }


componentDidMount() {
  this.checkLoginStatus()
}
authorizedPages = () => {
  return [ <Route path='/portfolio-manager' component={PortfolioManager} />]
}

  render () {
    
    return (
      <div className='container'>
        <Router>
          <div>
          
            <NavBar loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
             />
           
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
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
              <Route path='/portfolio:slug' component={PortfolioDetail} />
              
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

        
        
      </div>
    )
  }
}


