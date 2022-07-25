import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Homepage from './pages/HomePage';
import AddRecipe from './pages/AddRecipe'
import Navbar from './components/Navbar';
import Recipes from './pages/Recipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className='pages'>
          <Routes>
            <Route 
              path='/'
              element={<Homepage />}
            />

            <Route
              path='/addRecipe'
              element={<AddRecipe />}
            />

            <Route
              path='/Recipes'
              element={<Recipes />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;