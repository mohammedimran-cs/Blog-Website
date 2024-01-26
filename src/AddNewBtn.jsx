import React, { useContext } from 'react'
import './addNewBtn.css'
import { useNavigate } from 'react-router-dom'
import { MyContext } from './MyContext'

const AddNewBtn = () => {

    const navigate = useNavigate();
    const { setSinglePostData } = useContext(MyContext);
    const handleClick = () => {
        setSinglePostData({id : '', title : '', body : '', image : '' , publishedDate : ''});
        navigate('/new');
    }
  return (
   <button className='add-btn' onClick={handleClick}>Add New</button>
  )
}

export default AddNewBtn