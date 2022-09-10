import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Recipes from './pages/Recipes';
import Home from './pages/Home/Home';
import Communities from './pages/Communities/Communities';

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
            <Route path='/communities' element={<Communities />} />
          </Routes>

        </div>

      </Router>

      <ToastContainer />

    </>
    
  );
}

export default App;
