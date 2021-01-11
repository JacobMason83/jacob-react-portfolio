import React, { Component } from 'react';
import axios from 'axios'


export default class PortfolioForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            url: "",
            category:"",
            position: "",
            thumb_image: "",
            banner_image: "",
            logo_image: ""
        }
        
    }
    buildForm = () => {
        let formData = new FormData()

        formData.append("portfolio_item[name]", this.state.name)
        formData.append("portfolio_item[description]", this.state.description)
        formData.append("portfolio_item[url]", this.state.url)
        formData.append("portfolio_item[category]", this.state.category)
        formData.append("portfolio_item[position]", this.state.position)
        return formData
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (event) => {
        //https://jacobmason.devcamp.space/portfolio/portfolio_items
        axios.post(
        "https://jacobmason.devcamp.space/portfolio/portfolio_items", 
        this.buildForm(),
        { withCredentials:true}
        )
        .then(res => {
            console.log("res", res)
        })
        .catch(err => {console.log("HandleSubmit Error", err)})          
        
        
        e.preventDefault()
        
    }
  
  
  
  
  
    render(){
      return(
   <div> 
        <h1>Portfolio Form</h1>
    <form onSubmit={this.handleSubmit}>
    <div>
        
        <input 
            type="text"
            name="name"
            placeholder="Portfolio Item Name"
            value={this.state.name}
            onChange={this.handleChange}
        />
        <input 
            type="text"
            name="url"
            placeholder="Url"
            value={this.state.url}
            onChange={this.handleChange}
        />       
        </div>
        <div>
        <input 
            type="text"
            name="position"
            placeholder="Position"
            value={this.state.position}
            onChange={this.handleChange}
        />
              <select
               name='category'
               value={this.state.category}
               onChange={this.handleChange}
              >
              <option value='School'>School</option>
              <option value='MyProjects'>MyProjects</option>
              <option value='InClass'>InClass</option>
              <option value='BeforeSchool'>BeforeSchool</option>
             </select>

        </div>
        <div>
        <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
        />
        </div>
        <div>
            <button type="submit">Save</button>
        </div>
    </form>
  </div>
   )
  }
}