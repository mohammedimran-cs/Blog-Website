import React, { useContext, useEffect } from 'react';
import { Link , useNavigate, useParams } from 'react-router-dom';
import { MyContext } from './MyContext';
import axiosInstance from './api';
import './singlePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import AddNewBtn from './AddNewBtn';

const SinglePage = () => {

    const { id } = useParams();
    const { singlePostData, setSinglePostData } = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        // console.log("in useEffect")
        const getPostById = async () => {
            try {
                let response = await axiosInstance.get(`/posts`, {
                    params: {
                        id: id
                    }
                });
                let data = await response.data;

                if (Array.isArray(data) && data.length > 0) {
                    setSinglePostData(() => {
                       return { id : data[0].id,
                        title : data[0].title,
                        body : data[0].body,
                        image : data[0].image,
                        publishedDate : data[0].publishedDate
                       }
                    });
                } 
                else {
                    // console.log("Invalid data:", data);
                }

            } catch (error) {
                // console.log("Error fetching data:", error);
            }
        };

        getPostById(); 

    }, []);  

    const handleBackIcon = () => {
       navigate('/');
    }

    const handleDelete = async () => {

            const response = await axiosInstance.delete(`/posts/${id}`);
            const data = await response.data;
            // console.log(data);
            setSinglePostData({id : '', title : '', body : '', image : '' , publishedDate : ''});
            navigate(-1);
    }

    return (
        <>
        {!singlePostData.id? (<h1>No data here</h1>) : (
        <div className='singlePost-container'>

            <div className='image-container'>
                <img src={singlePostData.image}  alt={singlePostData.title} />
                </div>

            <h2 >{singlePostData.title}</h2>

            <p style={{fontSize : "20px"}}>{singlePostData.body}</p>
            <p style={{fontSize : "16px"}}>Published at :{` ${singlePostData.publishedDate}`}</p>

            <div className='action'>
                <Link to = {`/update/${id}`}><button className='btn-update'>Update</button></Link>
                <button className='btn-delete' onClick={handleDelete} >Delete</button>
                <FontAwesomeIcon icon={faCircleChevronLeft} className =' back' onClick={handleBackIcon}/>
            </div>
          
        </div>
        )}
        <AddNewBtn />
        </>
        
    );
}

export default SinglePage;





