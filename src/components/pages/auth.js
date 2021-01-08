import React, { Component} from 'react'
import loginImage from '../../../static/assets/images/auth/login.jpg'
import Login from '../../auth/login.js'


export default class Auth extends Component {
    constructor(props){
        super(props)

       
    }

    handleSuccessfulAuth = () => {
        this.props.handleSuccessfulLogin()
        this.props.history.push("/")
    }
    handleUnSuccessfulAuth = () => {
        this.props.handleUnSuccessfulLogin()

    }

    render(){
        return(
            <div className="auth-page-wrapper">
            <div 
            className="left-column"
            style={{backgroundImage: `url(${loginImage})`}}
             />
           
            <div className="right-column">
               <Login
               handleSuccessfulAuth={this.handleSuccessfulAuth}
               handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
                /> 
            </div>
                
            </div>
        )
    }
}