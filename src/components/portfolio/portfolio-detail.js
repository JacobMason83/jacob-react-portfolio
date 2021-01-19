import axios from 'axios'
import React, { Component } from 'react'

export default class PortfolioDetail extends Component{
    constructor(props) {
        super(props)
    }
    getPortfolioItem = () =>{
        axios
        .get(`https://jacobmason.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {withCredentials: true})
        .then(res => {
            console.log("get Portfolio item ", res)
        })
        .catch(err => console.error(err))
    }  
    componentDidMount(){
        this.getPortfolioItem()
    } 
    render() {
        return(
            <div>
             <h2>Portfolio detail for {this.props.match.params.slug} </h2>
            </div>
        )

    }
}