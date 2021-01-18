import React from 'react';



const  BlogFeaturedImage = props => {
    console.log(props)
    if(!props.img) {
        return null 
    }else {
   return (
    <div className='featured-image-wrapper'>
    <img src={props.img} />
  </div>
   )
    }
}

export default BlogFeaturedImage