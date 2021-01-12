import React, { Component } from 'react'
import axios from 'axios'
import PortfolioSideBarList from '../portfolio/portfolio-sidebar-list'
import PortfolioForm from '../portfolio/portfolio-form'



export default class PortfolioManager extends Component {
  constructor () {
    super()
    this.state = {
       portfolioItems: [],
       portfolioToEdit: {}
    }
  }

  getPortfolioItems = () => {
     axios
     .get('https://jacobmason.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc', {withCredentials: true})
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
  handleDeleteClick = (portfolioItem) => {
     axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, {withCredentials: true})
     .then(res => {
        this.setState({
           portfolioItems: this.state.portfolioItems.filter(item => {
              return item.id !== portfolioItem.id
           })
         })
         return res.data
     }) .catch(err => console.error("an error occured", err))
     
  }
  handleEditclick = (portfolioItem) => {
     this.setState({
      portfolioToEdit: portfolioItem
     })
  }

  clearPortfoliotoEdit = () => {
     this.setState({
      portfolioToEdit: {}
     })
  }
  
  handleSuccessfulFormSubmission = (portfolioItem) => {  
     this.setState({
        portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
     })
     
  }

  handleFormSubmissionFormError = (err) => {
     console.log("handleformsubmissionerror", err)
  }

  render () {
    return (
      <div className="portfolio-manager-wrapper">
      <div className="left-column">
        <PortfolioForm 
        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
        handleFormSubmissionFormError={this.handleFormSubmissionFormError}
        clearPortfolioToEdit={this.clearPortfoliotoEdit}
         portfolioToEdit={this.state.portfolioToEdit}
         />

      </div>
      <div className="right-column">
        
      <PortfolioSideBarList  data={this.state.portfolioItems}
         handleDeleteClick={this.handleDeleteClick}
         handleEditclick={this.handleEditclick}

      />
      </div>
      </div>
    )
  }
}
