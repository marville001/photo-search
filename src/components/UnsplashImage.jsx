import React from 'react'
import { Link } from 'react-router-dom'

const UnsplashImage = ({image}) => {
    const {thumb} = image.urls;
    return (
        <Link className="image-link" to={`/details/${image.id}`}>
            <img className="image" src={thumb} alt={"img"}/>
        </Link>
    )
}

export default UnsplashImage
