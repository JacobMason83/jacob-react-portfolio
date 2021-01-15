import React, { Component } from 'react'
import axios from 'axios'
import DropzoneComponent from 'react-dropzone-component'
import RichTextEditor from '../forms/rich-text-editor'

export default class BlogForm extends Component {
  constructor () {
    super()
    this.state = {
        title: "", 
        blog_status: "",
        content: "",
        featured_image: ""
    }
    this.featureRef = React.createRef()
  }
  componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    }
  }
  djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    }
  }
  handleFeaturedImageDrop = () => {
    return {
      addedFile: file => this.setState({
        featured_image: file
      })
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
            if(this.state.featured_image){
              this.featureRef.current.dropzone.removeAllFiles()
            }   
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

     
      formData.append("portfolio_blog[featured_image_url]", this.state.featured_image)
      
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
      <div className="image-uploaders">
  <DropzoneComponent
    ref={this.featureRef}
    config={this.componentConfig()}
    djsConfig={this.djsConfig()}
    eventHandlers={this.handleFeaturedImageDrop()}
  >
    <div className="dz-message">Featured Image</div>
  </DropzoneComponent>
</div>
      

      <button type='submit' className="btn">save</button>
     
    </form>
    )
  }
}
