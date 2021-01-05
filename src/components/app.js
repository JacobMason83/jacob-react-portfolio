import React, { Component } from 'react';
import moment from 'moment'
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// component based imports go below library imports and have relative paths 

import NavBar from './NavBar/NavBar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'
import PortfolioDetail from './portfolio/portfolio-detail'
import NoMatch from './pages/no-match'




const axios = require('axios');
export default class App extends Component {
  constructor(){
    super()
    this.getPortfolioItems = this.getPortfolioItems.bind(this)
  }
  getPortfolioItems() {

    axios
    .get('https://jacobmason.devcamp.space/portfolio/portfolio_items')
    .then((response) => {
      // handle success
      console.log(response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })  
  }
  render () {
    this.getPortfolioItems()
    return (
      <div className='app'>
        <Router>
          <div>
          <h1>Jacob Masons Portfolio</h1>
          <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavBar />
            <Switch>
              {/* root route  */}
              <Route exact path='/' component={Home} />
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

