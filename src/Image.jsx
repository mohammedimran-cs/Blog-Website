import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({ postData }) => {

  return (
<div className='image-container'>
    <Link to= {`/${postData.id}`}><img src={postData.image}  alt={postData.title} /></Link>
    </div>
    )
}

export default Image

