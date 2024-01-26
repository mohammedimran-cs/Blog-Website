import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from './MyContext';
import axiosInstance from './api';
import Post from './Post';
import AddNewBtn from './AddNewBtn';

const Main = () => {
  const { posts, setPosts , check , setCheck} = useContext(MyContext);


  useEffect(() => {

    const load = async () => {
    try {
      let response = await axiosInstance.get('/posts');
      let responseData = await response.data;

      if (Array.isArray(responseData)) {
        // console.log(responseData);
        setPosts(responseData);
        setCheck( posts.length > 0);
      } 
      else {
        // console.error('Invalid response data. Expected an array.');
        setCheck( posts.length > 0);
      }
      }
    catch (error) {
      // console.error('Error fetching data:', error);
    }
  }
  setTimeout(() => {
    load();
  },3000);
  // load();
  }, []);

  return (
    <>
    <div className='post-layout'>
      {posts.length > 0 ? (
        
            posts.map((data,index) => (
                <Post key = { index } postData = { data } />
            ))
      ) : (
        <h1 style={{margin : 'auto',textAlign : 'center'}}>{check ? 'loading...' : 'Post is Empty'}</h1>

      )}
    </div>
    <AddNewBtn />
   </>
  )
}

export default Main;
