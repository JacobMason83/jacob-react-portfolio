
import React, { Component } from 'react'

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
      this.props.handleSuccessfulFormSubmission(this.state)
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
