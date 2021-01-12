import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
 export default class Blog extends Component {
     constructor(){
         super()

         this.state ={
             blogItems: []
         }
     }
     getBlogItems = () => {
         axios
         .get('https://jacobmason.devcamp.space/portfolio/portfolio_blogs', {withCredentials: true})
         .then(res => {
             this.setState({
                 blogItems: res.data.portfolio_blogs
             })
         })
         .catch(err => console.error(err))
     }
     componentWillMount() {
         this.getBlogItems()
     }
    
    render() {
    return(
        <div>Blog
        <h2>Blog</h2>

        <div>
            <Link to='/about-me'> Read more about myself </Link>
            
            </div>
        </div>
    )
    }
}