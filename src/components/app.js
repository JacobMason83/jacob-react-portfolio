import React, { Component } from 'react';
import moment from 'moment'

// component based imports go below library imports and have relative paths 
import PortfolioContainer from './portfolio/portfolio-container'
import NavBar from './NavBar/NavBar'





export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <NavBar />
        <h1>Jacob Mason Portfolio</h1>  
        
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>   
        <PortfolioContainer />

      </div>
    );
  }
}
