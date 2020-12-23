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
            data: [
                {title:'Quip'},
                {title: 'Eventbrite'}, 
                {title:'Ministry Safe'},
                {title: 'SwingAway'}
            ]            
        }
        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }
// dynamic in nature and allows you to map the data and putting it on the screen no more hardcoding
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
 
    render(){
        return(
            <div>
                <h2>{this.state.pageTitle} </h2>
                
                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>

                <hr />

                <button onclick={this.handlePageTitleReset}>Reset Me</button>
            </div>
        )
    }
}