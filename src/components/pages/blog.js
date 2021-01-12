import React, { Component } from 'react'
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
        const blogRecords = this.state.blogItems.map(blogItem => {
            return (<h1>{blogItem.title}</h1>)
        })
    return(
        <div>Blog
        <h2>Blog</h2>

        <div>
           
            {blogRecords}
            </div>
        </div>
    )
    }
}