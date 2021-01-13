import React, { Component } from 'react'
import axios from 'axios'

export default class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: this.props.match.params.slug
    }
  }

  getBlogItem = () => {
    axios
    .get(`https://jacobmason.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`, {withCredentials: true})
    .then(res => {
      console.log("res from getBlogItem", res)
    })
    .catch(err => console.error("blogitemError", err))
  }


  render () {
    console.log(this.state.currentId)
    return (
      <div>
        <h1>Blog detail</h1>
      </div>
    )
  }
}
