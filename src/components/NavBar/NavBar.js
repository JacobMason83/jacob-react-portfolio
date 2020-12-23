import React, { Component } from 'react'


export default class NavBar extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                {false ? <button>Add Blog</button> : null} 
            </div>
        )
    }
}// using an ternary operator to show if the button is hidden or not