import React, { Component } from 'react'
import axios from 'axios'
import BlogItem from '../blog/blog-item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



 export default class Blog extends Component {
     constructor(){
         super()

         this.state ={
             blogItems: [],
             totalCount: 0,
             currentPage: 0,
             isLoading: true
         }
         this.activateInfiniteScroll()
     }
     getBlogItems = () => {
         this.setState({
             currentPage: this.state.currentPage + 1
         })
         axios
         .get('https://jacobmason.devcamp.space/portfolio/portfolio_blogs', {withCredentials: true})
         .then(res => {
             
             this.setState({
                 blogItems: res.data.portfolio_blogs,
                 totalCount: res.data.meta.total_records,
                 isLoading:false
             })
         })
         .catch(err => console.error(err))
     }
     activateInfiniteScroll = () => {
         window.onscroll =() => {
            //  console.log('window.innerHeight', window.innerHeight)
            //  console.log('document.documentElement.scrollTop', document.documentElement.scrollTop)
            //  console.log('document.documentElement.offsetHeight', document.documentElement.offsetHeight)
             if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                console.log("getmoreposts")
             }
         }
     }
     componentWillMount() {
         this.getBlogItems()
     }
     clearIsLoading = () => {
         this.setState({
             isLoading: false
         })
     }
     componentWillUnmount() {
         this.clearIsLoading()
     }
    
    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem}/>
        })

        return( 
        <div className="blog-container">
        <div className="content-container">{blogRecords}</div>
        {this.state.isLoading ? (
        <div className="content-loader"><FontAwesomeIcon icon="spinner" spin /></div>
        ) : null}
        
      </div>
        )
    }
    
}
