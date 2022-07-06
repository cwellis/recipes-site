import React, { useState } from 'react'
import "./SignUpForm.css"

let SignUp = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmPassword, setUserConfirmPassword] = useState('')
    const [isMatchingPassword, setIsMatchingPassword] = useState('hidden')
    let handleUserNameOnKeyUp = (event) => {
        setUserName(event.target.value)
    }

    let handlePasswordOnKeyUp = (event) => {
        setUserPassword(event.target.value)
    }
    
    let handlePasswordConfirmationOnKeyUp = (event) => {
        setUserConfirmPassword(event.target.value)
    }

    let handleFormSubmissionOnClick = () => {
        console.log(userName)
        // console.log(userPassword)
        // console.log(userConfirmPassword)
        const isAllowedLogin = userPassword === userConfirmPassword ? 'hidden' : 'show'
        setIsMatchingPassword(isAllowedLogin)
    }

    return (
        <div className='signUp'>
            <div className='register'>Register Account</div>
            <div>Username:</div>
            <input onKeyUp={ handleUserNameOnKeyUp } type="text" placeholder='Username' />
            <div>Password:</div>
            <input onKeyUp={ handlePasswordOnKeyUp } type="text" placeholder='Password' />
            <div>Confirm Password:</div>
            <input onKeyUp={ handlePasswordConfirmationOnKeyUp } type="text" placeholder='Confirm Password' />
            <p className={ isMatchingPassword }>PASSWORDS DO NOT MATCH</p>
            <button onClick={ handleFormSubmissionOnClick }>Sign Up</button>
        </div>
    )
}
 
export default SignUp;