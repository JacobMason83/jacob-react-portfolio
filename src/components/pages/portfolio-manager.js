import React, { Component } from 'react'
import axios from 'axios'
import PortfolioSideBarList from '../portfolio/portfolio-sidebar-list'
import PortfolioForm from '../portfolio/portfolio-form'



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
  handleSuccessfulFormSubmission = (portfolioItem) => {
     //todo
     //update the portfolio itmes state
     //and portfolioitem to the list 
  }

  handleFormSubmissionFormError = (err) => {
     //TODO
  }

  render () {
    return (
      <div className="portfolio-manager-wrapper">
      <div className="left-column">
        <PortfolioForm 
        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        handleFormSubmissionFormError={this.handleFormSubmissionFormError}
         />

      </div>
      <div className="right-column">
        
      <PortfolioSideBarList  data={this.state.portfolioItems}/>
      </div>
      </div>
    )
  }
}
