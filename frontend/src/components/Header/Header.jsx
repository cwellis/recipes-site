import { FaSignInAlt, FaSignOutAlt, FaUser, FaPen } from 'react-icons/fa'
import { BsFillPeopleFill } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
 
function Header() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const location = useLocation()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/register')
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>Recipe Site</Link>
        </div>

        <ul>
            {user ? (
                <div className='header-log'>

                    <li>
                        <button className='btn'>
                            <Link to ='/recipes' className='white'>
                                <FaPen /> Recipes
                            </Link>
                        </button>

                    </li>

                    <li>
                        <button className='btn'>
                            <Link to ='/communities' className='white'>
                                <BsFillPeopleFill /> Communities
                            </Link>
                        </button>

                    </li>

                    <li>
                        <button className='btn'>
                            <Link to ='/dashboard' className='white'>
                                <FaPen /> Add Recipe
                            </Link>
                        </button>

                    </li>

                    <li>
                        <button 
                            className='btn' 
                            onClick={onLogout}
                        >
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>

                </div>
                
            ) : (
            <>
            <li>
                <Link to ='/login' className={location.pathname === "/login" ? "hidden" : "" }>
                    <FaSignInAlt /> Login
                </Link>
            </li>

            <li>
                <Link to ='/register' className={location.pathname === "/register" ? "hidden" : "" }>
                    <FaUser /> Register
                </Link>
            </li>
            </>)}
            

        </ul>
    </header>
  )
}

export default Header