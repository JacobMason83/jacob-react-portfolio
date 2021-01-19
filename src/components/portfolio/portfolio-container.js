import React, { Component } from "react"
import axios from 'axios'

import PortfolioItem from "./portfolio-items"


// difference between class and functional is that class can use state and lifecycle, although that has changed with hooks, but overall state and 
// lifecycle is the reasons


export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []            
        }
        // this.getPortfolioItems = this.getPortfolioItems.bind(this)
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }
// dynamic in nature and allows you to map the data and putting it on the screen no more hardcoding
// this.handleFilter = this.handleFilter.bind(this)
    portfolioItems() {

        return this.state.data.map(item => {
            // console.log("Portfolio item", item)
            
            return <PortfolioItem key={item.id} item={item} />
        })
    }

    handlePageTitleUpdate = () => {
        this.setState({
            pageTitle: "Something Else"
        })
    }
    handleFilter = (filter) => {
        if(filter === "CLEAR_FILTERS") {
            this.getPortfolioItems()
        } else {
            this.getPortfolioItems(filter)
        }
    }
    getPortfolioItems(filter = null) {

        axios
        .get('https://jacobmason.devcamp.space/portfolio/portfolio_items')
        .then((response) => {
          if(filter){
            this.setState({
                data: response.data.portfolio_items.filter(item => {
                    return item.category === filter;
                })
            })
         } else {
              this.setState({
                  data: response.data.portfolio_items
              })
            }
        
        })
        .catch((error) => {
         
          console.log(error);
        })  
    }
      componentDidMount(){
          this.getPortfolioItems()
      }
    render(){ // this is called conditional rendering, and is a popular pattern 
        if(this.state.isLoading) { 
            return <div>Loading...</div>
        }
        
        return(
           <div className='homepage-wrapper'>
  <div className='filter-links'>
    <button className='btn' onClick={() => this.handleFilter('School')}>
      School
    </button>
    <button className='btn' onClick={() => this.handleFilter('InSchool')}>
      InSchool
    </button>
    <button className='btn' onClick={() => this.handleFilter('MyProjects')}>
      MyProjects
    </button>
    <button className='btn' onClick={() => this.handleFilter('CLEAR_FILTERS')}>
      All
    </button>
  </div>
  <div className='portfolio-items-wrapper'>{this.portfolioItems()}</div>
</div>

                
          
        )
    }
}
