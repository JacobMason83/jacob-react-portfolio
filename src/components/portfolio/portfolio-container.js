import { data } from "autoprefixer";
import React, { Component } from "react"
import PortfolioItem from "./portfolio-items"



// difference between class and functional is that class can use state and lifecycle, although that has changed with hooks, but overall state and 
// lifecycle is the reasons 
export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                {title:'Quip', category: 'eCommerce'},
                {title: 'Eventbrite', category: 'Scheduling'}, 
                {title:'Ministry Safe', category: 'Enterprise'},
                {title: 'SwingAway', category: 'eCommerce'}
            ]            
        }
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }
// dynamic in nature and allows you to map the data and putting it on the screen no more hardcoding
// this.handleFilter = this.handleFilter.bind(this)
    portfolioItems() {
        
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={'google.com'} />
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
    render(){ // this is called conditional rendering, and is a popular pattern 
        if(this.state.isLoading) { 
            return <div>Give Me Nuggies....</div>
        }
        return(
            <div>
                <h2>{this.state.pageTitle} </h2>
                
                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>


                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>

                <hr />

                <button onclick={this.handlePageTitleReset}>Reset Me</button>
            </div>
        )
    }
}
