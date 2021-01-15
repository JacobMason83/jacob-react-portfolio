import React, { Component } from 'react'
import axios from 'axios'
import RichTextEditor from '../forms/rich-text-editor'

export default class BlogForm extends Component {
  constructor () {
    super()
    this.state = {
        title: "", 
        blog_status: "",
        content: ""
    }
  }
  handleRichTextEditorChange = (content) => {
    this.setState({content})
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
            this.props.handleSuccessfullFormSubmission(
              res.data.portfolio_blog
            )
      })
      .catch(err => console.error("error from handlesubmit blog-form", err))
     
  }
  buildForm = () => {
      let formData = new FormData()

      formData.append("portfolio_blog[title]", this.state.title)
      formData.append("portfolio_blog[blog_status]", this.state.blog_status)
      formData.append("portfolio_blog[content]", this.state.content)

      return formData
  }
  render () {
    return(
    <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
    <div className="two-column">
    
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
      </div>
      
      <div className="one-column">
      <RichTextEditor
      handleRichTextEditorChange={this.handleRichTextEditorChange}
       />

      </div>
      

      <button type='submit' className="btn">save</button>
     
    </form>
    )
  }
}
