import React, { Component } from 'react';
import moment from 'moment'

const hello = 'Thanks for coming to my Page , any questions just ask';


export default class App extends Component {
  
  render() {
    return (
      <div className='app'>
        <h1>Jacob Mason Portfolio</h1>  
        <div>{hello + ' ' + moment().format('MMMM Do YYYY, h:mm:ss a')}</div>      
      </div>
    );
  }
}
