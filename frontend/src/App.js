import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Recipes from './pages/Recipes';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <Router>

      
        <div className='container'>

          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/recipes' element={<Recipes />} />
          </Routes>

        </div>

      </Router>

      <ToastContainer />

    </>
    
  );
}

export default App;
