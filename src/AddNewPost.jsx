import React, { useContext, useEffect } from 'react'
import FormComponent from './FormComponent'
import axiosInstance from './api';
import { MyContext } from './MyContext';
import { useNavigate } from 'react-router-dom';

const AddNewPost = () => {

    const { singlePostData, setSinglePostData , posts , setPosts , setCheck} = useContext(MyContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSinglePostData((preValue) => ({
            ...preValue,
            [name]: value,
        }));
    };

    useEffect(() => {
    
        const load = async () => {
        try {
          let response = await axiosInstance.get('/posts');
          let responseData = await response.data;
    
          if (Array.isArray(responseData)) {
            // console.log(responseData);
            setPosts(responseData);
            setCheck( responseData.length > 0);
          } 
          else {
            console.error('Invalid response data. Expected an array.');
          }
          }
        catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      setTimeout(() => {
        load();
      },3000);
      }, [setCheck, setPosts]);

    const addPost = () => {
        const insertData = async () => {

            const currentDate = new Date();
            // Define options for formatting
            const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
            };

            // Format the date
            const formattedDate = currentDate.toLocaleDateString('en-US', options);

            // Log the result
            console.log(`${formattedDate} typeof : `+typeof formattedDate);

            if(posts.length > 0){
            var postLength = posts.length-1;
            var uniqueId = parseInt(posts[postLength].id)+1
            }
            else {
                uniqueId = 0
            }
            
            try {
                const newData = {
                    ...singlePostData,
                    publishedDate : formattedDate,
                    id : uniqueId+""
                };

                const response = await axiosInstance.post('/posts/',newData);
                const data = await response.data;
                console.log(data);
            }
            catch(error) {
                console.log("error in add new post : " +error);
            }
        }
        insertData();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost();
        navigate(-1);
    };

  return (
    <div className='bg-color'>
        <div className='form-container'>
            <FormComponent handleChange = {handleChange} handleSubmit = {handleSubmit}/>
        </div>
    </div>
    )
}

export default AddNewPost