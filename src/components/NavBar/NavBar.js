import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
               
            <NavLink exact to="/">
                Home
            </NavLink> 
            <NavLink to="about-me">
                About
            </NavLink>


                <button>Contact</button>
                <button>Blog</button>
                {false ? <button>Add Blog</button> : null} 
            </div>
        )
    }
}// using an ternary operator to show if the button is hidden or not