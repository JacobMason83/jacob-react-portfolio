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
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })

    }
    getPortfolioItems() {

        axios
        .get('https://jacobmason.devcamp.space/portfolio/portfolio_items')
        .then((response) => {
          // handle success
          console.log("Response Data", response);
          this.setState({
              data: response.data.portfolio_items
          })
        })
        .catch((error) => {
          // handle error
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
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('School')}>School</button>
                <button className="btn" onClick={() => this.handleFilter('InSchool')}>InSchool</button>
                <button className="btn" onClick={() => this.handleFilter('MyProjects')}>MyProjects</button>
                {this.portfolioItems()}

                </div>
                
          
        )
    }
}
