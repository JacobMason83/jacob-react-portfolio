import React, { Component } from "react"
import PortfolioItem from "./portfolio-items"



// difference between class and functional is that class can use state and lifecycle, although that has changed with hooks, but overall state and 
// lifecycle is the reasons 
export default class PortfolioContainer extends Component {
    constructor(){
        super();
        console.log('Portfolio Container has Rendered');
        
    }
// dynamic in nature and allows you to map the data and putting it on the screen no more hardcoding
    portfolioItems() {
        const data = ['Quip', 'Eventbrite', 'Ministry Safe' ] 
        return data.map(item => {
            return <PortfolioItem />
        })
    }
    render(){
        return(
            <div>
                <h2>Portfolio items go here </h2>
                
                {this.portfolioItems()}
            </div>
        )
    }
}
