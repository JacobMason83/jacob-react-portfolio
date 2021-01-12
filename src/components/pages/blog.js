import React, { Component } from 'react'
import axios from 'axios'
import BlogItem from '../blog/blog-item'


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
            return <BlogItem key={blogItem.id} blogItem={blogItem}/>
        })

        return <div>{blogRecords}</div>
    }
    
}
