import React, { Component, createRef } from 'react'
import axios from 'axios'
import DropzoneComponent from 'react-dropzone-component'
import RichTextEditor from '../forms/rich-text-editor'

export default class BlogForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
        id:"",
        title: "", 
        blog_status: "",
        content: "",
        featured_image: "",
        apiUrl: "https://jacobmason.devcamp.space/portfolio/portfolio_blogs",
        apiAction: ""
    }
    this.featuredImageRef = createRef()
  }

  componentDidMount() {
    if(this.props.editMode) {
      this.setState({
        id: this.props.blog.id,
        title: this.props.blog.title,
        blog_status: this.props.blog.blog_status,
        content: this.props.blog.content,
        apiUrl: `https://jacobmason.devcamp.space/portfolio/portfolio_blogs/${this.props.blog.id}`,
        apiAction: "patch"
      })
    }
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
      addedfile: file => this.setState({
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

      axios({
        method: this.state.apiAction,
        url: this.state.apiUrl,
        data: this.buildForm(),
        withCredentials: true
    })
      .then(res => {
        
        if(this.state.featured_image){
          this.featuredImageRef.current.dropzone.removeAllFiles()
        }   
        if(this.props.editMode){
          //update blog
          this.props.handleUpdateFormSubmission(res.data.portfolio_blog)
        }  else {
        this.props.handleSuccessfullFormSubmission(res.data.portfolio_blog);
        }
      })
      .catch(err => console.error("error from handlesubmit blog-form", err))
     
  }

  buildForm = () => {
      let formData = new FormData()

      formData.append("portfolio_blog[title]", this.state.title)
      formData.append("portfolio_blog[blog_status]", this.state.blog_status)
      formData.append("portfolio_blog[content]", this.state.content)

      if(this.state.featured_image){
      formData.append("portfolio_blog[featured_image]", this.state.featured_image)
      }

      return formData
  }
  deleteImage = (imageType) => {
    axios
    .delete(`https://api.devcamp.space/portfolio/delete-portfolio-blog-image/
    ${this.props.blog.id}?image_type=${imageType}`,
     {withCredentials: true})
     .then(res => {
        this.props.handleFeaturedImageDelete()
     })
     .catch(err => console.error(err))
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
      editMode={this.props.editMode}
      contentToEdit={this.props.editMode && this.props.blog.content ? this.props.blog.content : null}
       />

      </div>
      <div className="image-uploaders">
      {this.props.editMode && this.props.blog.featured_image_url ? (
            <div className="portfolio-manager-image-wrapper">
              <img src={this.props.blog.featured_image_url} />

              <div className="image-removal-link">
                <a onClick={()=> this.deleteImage('featured_image')}>Remove file</a>
              </div>
            </div>
          ) : (
            <DropzoneComponent
              ref={this.featuredImageRef}
              config={this.componentConfig()}
              djsConfig={this.djsConfig()}
              eventHandlers={this.handleFeaturedImageDrop()}
            >
              <div className="dz-message">Featured Image</div>
            </DropzoneComponent>
          )}
</div>
      

      <button type='submit' className="btn">save</button>
     
    </form>
    )
  }
}
