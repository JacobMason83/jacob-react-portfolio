import React, { Component } from 'react'
import axios from 'axios'
import PortfolioSideBarList from '../portfolio/portfolio-sidebar-list'



export default class PortfolioManager extends Component {
  constructor () {
    super()
    this.state = {
       portfolioItems: []
    }
  }

  getPortfolioItems = () => {
     axios
     .get('https://jacobmason.devcamp.space/portfolio/portfolio_items', {withCredentials: true})
     .then(res => {
        this.setState({
           portfolioItems: [...res.data.portfolio_items]
          })
     })
     .catch(err => console.error(err))
  }
  componentDidMount() {
     this.getPortfolioItems()
  }

  render () {
    return (
      <div className="portfolio-manager-wrapper">
      <div className="left-column">
        <h1>Portfolio form</h1>

      </div>
      <div className="right-column">
        
      <PortfolioSideBarList  data={this.state.portfolioItems}/>
      </div>
      </div>
    )
  }
}
