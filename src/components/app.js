import React, { Component } from 'react';
import moment from 'moment'


// component based imports go below library imports and have relative paths 
import PortfolioContainer from './portfolio/portfolio-container'





export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <h1>Jacob Mason Portfolio</h1>  
        
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>   
        <PortfolioContainer />

      </div>
    );
  }
}
