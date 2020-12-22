import React, { Component } from "react"
import PortfolioItem from "./portfolio-items"



// difference between class and functional is that class can use state and lifecycle, although that has changed with hooks, but overall state and 
// lifecycle is the reasons 
export default class PortfolioContainer extends Component {
    render(){
        return(
            <div>
                <h2>Portfolio items go here </h2>
                <PortfolioItem />
            </div>
        )
    }
}
