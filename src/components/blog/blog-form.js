import React, { Component } from 'react'
import axios from 'axios'

export default class BlogForm extends Component {
  constructor () {
    super()
    this.state = {
        title: "", 
        blog_status: ""
    }
  }
  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault()
      axios
      .post("https://jacobmason.devcamp.space/portfolio/portfolio_blogs",
       this.buildForm(), 
       { withCredentials: true })
      .then(res => {
        this.props.handleSuccessfulFormSubmission(res.data)
      })
      .catch(err => console.error("error from handlesubmit blog-form", err))
     
  }
  buildForm = () => {
      let formData = new FormData()

      formData.append("portfolio_blog[title]", this.state.title)
      formData.append("portfolio_blog[blog_status]", this.state.blog_status)

      return formData
  }
  render () {
    return(
    <form onSubmit={this.handleSubmit}>
      <input type='text'
      name="title"
      placeholder="Blog Title"
       onChange={this.handleChange}
       value={this.state.title} />
      
      <input 
      type='text'
      name="blog_status"
      placeholder="Blog Status"
       onChange={this.handleChange}
       value={this.state.blog_status} />
      

      <button type='submit'>save</button>
    </form>
    )
  }
}
