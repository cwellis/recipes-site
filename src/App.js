import React from 'react';
import './index.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';

// components/ pages
import Homepage from './components/Homepage';
import Addrecipe from './components/Addrecipe';
import Markdown from './components/Markdown';
import SignUp from './components/forms/SignUpForm';
import SignIn from './components/forms/SignInForm'

function App() {
  return (
    <div>

      <BrowserRouter>

        <nav>
          <h1>Recipe Website</h1>
          
          <header>
            <Link className='link' to='/'>Home</Link>
            <Link to='/Addrecipe'>Add Recipe</Link>
          </header>
          
    
        </nav>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Addrecipe' element={<Addrecipe />} />
          <Route path='/Markdown' element={<Markdown />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
