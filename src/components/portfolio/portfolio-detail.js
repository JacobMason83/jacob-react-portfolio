import axios from 'axios'
import React, { Component } from 'react'

export default class PortfolioDetail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            portfolioItem: {}
        }
    }
    getPortfolioItem = () =>{
        axios
        .get(`https://jacobmason.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, {withCredentials: true})
        .then(res => {
            this.setState({
                portfolioItem: res.data.portfolio_item
            })
        })
        .catch(err => console.error(err))
    }  
    componentDidMount() {
        this.getPortfolioItem()
    } 
    render() {
        const { banner_image_url, name, description, url, category, thumb_image_url, logo_url} = this.state.portfolioItem
       
        return(
            <div className="portfolio-detail-wrapper">
             <h1>{name}</h1>
             <h2>{category}</h2>
             <div className="images">
             <img src={banner_image_url} />
             <img src={logo_url} />
             

             </div>
             <p>{description}</p>
            </div>
        )

    }
}


