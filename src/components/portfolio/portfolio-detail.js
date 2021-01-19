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
       const bannerStyles = {
           backgroundImage: "url(" +banner_image_url + ")",
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center center"
       }
       const logoStyles = {
           width: "200px"
       }
        return(
            <div className="portfolio-detail-wrapper">
             <div style={bannerStyles} className="banner">
                 <img style={logoStyles} src={logo_url} alt="logo"/>
             </div>

             <div className="portfolio-detail-description-wrapper">
                 <div className="description">{description}</div>
             </div>

             <div className="bottom-content-wrapper">
                 <a href={url} className="site-link" target="_blank">Visit {name}</a>
             </div>
            </div>
        )

    }
}


