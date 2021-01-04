import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
               
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
        )
    }
}// using an ternary operator to show if the button is hidden or not