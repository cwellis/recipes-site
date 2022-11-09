import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../../features/auth/authSlice'
import './Register.css'

function Register() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const [visible, setVisible] = useState(true)
    const [confirmVis, setConfirmVis] = useState(true)

    let handleVis = () => {
        visible === true ? setVisible(false) : setVisible(true)
    }

    let handleConfirmVis = () => {
        confirmVis === true ? setConfirmVis(false) : setConfirmVis(true)
    }
    
    const { name, email, password, password2 } = formData


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

        if (password !== password2) {
            toast.error('Passwords Do Not Match')
        } else {
            const userData = {
                name, 
                email, 
                password,
            }

            dispatch(register(userData))
        }
    }

    return (
        <div className='register-wrapper'>
            <div className="register-container">

                <section className="register-heading">
                    <div>
                        <h1>
                            <FaUser /> Register
                        </h1>
                        <p>
                            Please Create an Account
                        </p>
                    </div>
                </section>

                <section className="register-form">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                id='name' 
                                name='name' 
                                value={name} 
                                placeholder='Enter Name' 
                                onChange={onChange} 
                                className='form-control' 
                            />
                        </div>
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
                                value={password} 
                                placeholder='Enter Password' 
                                onChange={onChange} 
                                id='password' 
                                name='password' 
                                type={visible ? "password" : "text"}
                                className='form-control' 
                                />
                            <button 
                                type='button' 
                                className='viewBtn' 
                                onClick={handleVis}
                                >
                                {visible ? "View" : "Hide"}
                            </button>
                        </div>

                        <div className="form-group buttonIn">
                            <input 
                                id='password2' 
                                name='password2' 
                                value={password2} 
                                placeholder='Confirm Password' 
                                onChange={onChange} 
                                type={ confirmVis ? "password" : "text" } className='form-control' 
                                />

                            <button 
                                type='button' 
                                className='viewBtn' 
                                onClick={handleConfirmVis}
                                >
                                { confirmVis ? "View" : "Hide" }
                            </button>
                        </div>
                        <div className="form-group">
                            <button 
                                type="submit" 
                                className='btn btn-block'>
                                    Submit
                                </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Register