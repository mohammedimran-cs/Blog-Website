import React from 'react';
import './post.css'
import Image from './Image';
import { Link } from 'react-router-dom';

const Post = ( {postData} ) => {

  const limitWords = (text, limit) => {
    const words = text.split(' ');
    return words.slice(0, limit).join(' ');
  };

  const content = limitWords(postData.body,5)+'...';

  return (
    <div className='post-container'>
        <Image postData = {postData} />
      <Link to={`/${postData.id}`} className='style-link'><p>{postData.title}</p></Link>
      <p className='style-p'>{content}</p>
      <p>{postData.publishedDate}</p>
    </div>
  );
};

export default Post;
