import React from 'react'
import { Link } from 'react-router-dom'

// all were gonna do is pass it values, functional compents wont be as smart as a class / presentational component

export default function(props) {
    const {id, description, thumb_image_url, logo} = props.item
    return (
        <div>
      

        <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    )
}