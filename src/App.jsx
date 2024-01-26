import React, { useState } from 'react';
import { Route , Routes } from 'react-router-dom';
import Header from './Header';
import { MyContext } from './MyContext';
import SinglePage from './SinglePage';
import Home from './Home';
import Form from './Form';
import AddNewPost from './AddNewPost';

const App = () => {

  const [ posts , setPosts ] = useState( [] );
  const [check , setCheck] = useState( true );
  const [singlePostData , setSinglePostData] = useState({id : '', title : '', body : '', image : '' , publishedDate : ''});

    return (
      <>
      <MyContext.Provider value={{ 
        posts , setPosts , check , setCheck , singlePostData , setSinglePostData  
        
         }}>
          <Header />
          <Routes>
          <Route path='/' element = {<Home />} />
      <Route path='/:id' element = {<SinglePage />} />
      <Route path='/update/:id' element = {<Form />} /> 
      <Route path='/new' element = {<AddNewPost />} />
      <Route path='*' element = {<h1>404 Page Not Found</h1>} />
      </Routes>
      </MyContext.Provider>
      </>
  );
}

export default App;
