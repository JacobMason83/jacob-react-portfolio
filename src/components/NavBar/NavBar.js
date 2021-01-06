import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    constructor(props) {
        super()
    }
    render() {
        console.log(this.props)
        return (
            <div className="nav-wrapper"> 
            <div className="left-side" >             
            <NavLink exact to="/" activeClassName="nav-link-active">
                Home
            </NavLink> 
            <NavLink to="about-me">
                About
            </NavLink>
            <NavLink to="contact">
                Contact
            </NavLink>
            <NavLink to="blog">
                Blog
            </NavLink>


               
                {false ? <button>Add Blog</button> : null} 
                </div>
                <div className="right-side">
                    JACOB MASON
                </div>
            </div>
        )
    }
}// using an ternary operator to show if the button is hidden or not