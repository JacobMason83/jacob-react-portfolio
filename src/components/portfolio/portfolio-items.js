import React from 'react'
import { Link } from 'react-router-dom'

// all were gonna do is pass it values, functional compents wont be as smart as a class / presentational component

export default function(props) {
    return (
        <div>
        <h3>{props.title} </h3>
        <h4>{props.url}</h4>

        <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    )
}