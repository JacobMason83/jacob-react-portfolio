import React from 'react';



const  BlogFeaturedImage = props => {
    if(!props.image) {
        return null 
    }
   return (
    <div className='featured-image-wrapper'>
    <img src={props.image} />
  </div>
   )
}

export default BlogFeaturedImage