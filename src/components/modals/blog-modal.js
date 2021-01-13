import React, { Component } from 'react';
import ReactModal from 'react-modal'



export default class BlogModal extends Component {

   constructor() {
     super()

   }

   render() {
     return (
        <ReactModal isOpen={true}>
            <h1>Hi im a modal</h1>
        </ReactModal>
   )
  }
 }