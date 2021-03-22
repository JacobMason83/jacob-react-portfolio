import React from 'react'
import contactPicture from '../../../static/assets/images/bio/contact-pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function(){
    return(
        <div className="content-page-wrapper">
        <div 
        className="left-column"
        style={{
            background:"url(" + contactPicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
         />
        <div className="right-side">
            <div className="contact-bullet-points">
                <div className="bullet-point-group">
                    <div className="icon"><FontAwesomeIcon icon="phone" /> </div>
                    <div className="text">260-226-9662</div>
        </div>
                <div className="bullet-point-group">
                    <div className="icon"><FontAwesomeIcon icon="envelope" /> </div>
                    <div className="text">neozane23@gmail.com</div>
            </div>
                <div className="bullet-point-group">
                    <div className="icon"><FontAwesomeIcon icon="map-marked-alt" /> </div>
                    <div className="text">Garret Indiana </div>
                </div>
         
        </div>
        </div>
        </div>
    )
}