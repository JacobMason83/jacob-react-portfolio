import React, { Component } from 'react';
import moment from 'moment'

import PortfolioContainer from './portfolio-container'

const hello = 'Thanks for coming to my Page , any questions just ask';


export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <h1>Jacob Mason Portfolio</h1>  
        <PortfolioContainer />
        <PortfolioContainer />
        <PortfolioContainer />
        <div>{hello + ' ' + moment().format('MMMM Do YYYY, h:mm:ss a')}</div>      
      </div>
    );
  }
}
