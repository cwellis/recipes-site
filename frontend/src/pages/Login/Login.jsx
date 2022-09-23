import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'

function Login() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [visible, setVisible] = useState(true)

    let handleVis = () => {
        visible === true ? setVisible(false) : setVisible(true)
    }
    
    const { email, password } = formData


    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>
                    Login and Start Setting Recipes
                </p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <input 
                            type="text" 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Enter Email' 
                            onChange={onChange} 
                            className='form-control' 
                        />
                    </div>

                    <div className="form-group buttonIn">
                        <input 
                            id='password' 
                            name='password' 
                            value={password} 
                            placeholder='Enter Password' 
                            onChange={onChange} 
                            type={visible ? "password" : "text"} className='form-control'
                        />
                        <button type='button' className='viewBtn' onClick={handleVis}>
                            {visible ? "View" : "Hide"}
                        </button>
                    </div>
                    
                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login