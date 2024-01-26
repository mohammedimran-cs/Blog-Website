import React, { useContext } from 'react'
import { MyContext } from './MyContext';
import { useNavigate } from 'react-router-dom';

const FormComponent = ({handleChange , handleSubmit }) => {

  const navigate =useNavigate();

  const { singlePostData } = useContext(MyContext);

    const handleCancel = () => {
        navigate(-1);
    }

  return (
    <form onSubmit={(event) =>{handleSubmit(event)}}>
    <label>Title </label><br />
    <input type='text' name='title' value={singlePostData.title}  onChange={(event) =>{handleChange(event)}} /> <br />

    <label>Content</label><br />
    <textarea name='body' rows='4'value={singlePostData.body}
        onChange={(event) =>{handleChange(event)}} /> <br />

    <label>Image </label> <br />
    <input type='text' name='image' value={singlePostData.image}onChange={(event) =>{handleChange(event)}} /><br />

    <div>
        <button className='btn-delete' onClick={handleCancel} type='button'>Cancel</button>
        <button className='btn-update' type='submit'>Save</button>
    </div>
</form>
  )
}

export default FormComponent