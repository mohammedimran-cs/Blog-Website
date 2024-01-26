import React, { useContext, useEffect} from 'react';
import './form.css';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from './MyContext';
import axiosInstance from './api';
import FormComponent from './FormComponent';

const Form = () => {

    const {id} = useParams();
    console.log(typeof id);
    const postId = parseInt(id);
    const navigate = useNavigate();

    const { singlePostData, setSinglePostData } = useContext(MyContext);

    useEffect(() => {
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
                    console.log("Invalid data:", data);
                }

            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        getPostById(); 
    },[id,setSinglePostData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSinglePostData((preValue) => ({
            ...preValue,
            [name]: value,
        }));
    };

    const updateById = async () => {
        try{
        const response = await axiosInstance.put(`/posts/${postId}`,singlePostData);
        const data =  await response.data;
        console.log(data);
        // setSinglePostData({id : '', title : '', body : '', image : '' , publishedDate : ''});
        }
        catch(error) {
            console.log("showing error"+error)
        }
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateById();
        navigate(`/${id}`);
    };

    return (
        <div className='bg-color'>
        <div className='form-container'>
            <FormComponent handleChange = {handleChange} handleSubmit = {handleSubmit} />
            </div>
        </div>
    );
};

export default Form;
