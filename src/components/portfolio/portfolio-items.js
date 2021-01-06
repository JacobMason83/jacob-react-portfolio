import React from 'react'
import { Link } from 'react-router-dom'

// all were gonna do is pass it values, functional compents wont be as smart as a class / presentational component

export default function(props) {
    const {id, description, thumb_image_url, logo_url} = props.item
    return (
        <div className="portfolio-item-wrapper">
        <img src={thumb_image_url}/>
        <img src={logo_url}/>
        <div>{description}</div>
        <h4>{props.url}</h4>

        <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}