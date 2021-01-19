import React, { Component } from 'react'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import BlogFeaturedImage from '../blog/blog-featured-image'
import BlogForm from '../blog/blog-form'

export default class BlogDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentId: this.props.match.params.slug,
      blogItem: {},
      editMode: false
    }
  }
  handleUpdateFormSubmission = blog => {
    this.setState({
      blogItem: blog,
      editMode: false
    })
  }
  handleFeaturedImageDelete = () => {
    this.setState({
      blogItem: {
        featured_image_url: ''
      }
    })
  }
  handleEditClick = () => {
    if(this.props.loggedInStatus === "LOGGED_IN"){
      this.setState({
        editMode: true
      })
    }
  }

  getBlogItem = () => {
    axios
      .get(
        `https://jacobmason.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`,
        { withCredentials: true }
      )
      .then(res => {
        this.setState({
          blogItem: res.data.portfolio_blog
        })
      })
      .catch(err => console.error('blogitemError', err))
  }
  componentDidMount () {
    this.getBlogItem()
  }

  render () {
    const {
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.blogItem

    const contentManager = () => {
      if (this.state.editMode) {
        return (
          <BlogForm
            editMode={this.state.editMode}
            blog={this.state.blogItem}
            handleFeaturedImageDelete={this.handleFeaturedImageDelete}
            handleUpdateFormSubmission={this.handleUpdateFormSubmission}
          />
        )
      } else {
        return (
          <div className='content-container'>
            <h1 onClick={this.handleEditClick}>{title}</h1>
            <BlogFeaturedImage img={featured_image_url} />
            <div>{ReactHtmlParser(content)}</div>
          </div>
        )
      }
    }
    return <div className='blog-container'>{contentManager()}</div>
  }
}
