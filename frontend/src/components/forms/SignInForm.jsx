import React from "react";
import "./SignInForm.css"

let SignIn = () => {

    

    let handleSignIn = () => {
        let username = document.querySelector('.username')
        let password = document.querySelector('.password')
        
        if (password.value.length > 0 && username.value.length > 0) {
            console.log (`Welcome ${username.value}`)
        } else {
            console.log(`Incorrect Username or Password entered`)
        }
    }

    return (
    <div>
        <div className='signIn'>
            <div>Username:</div>
            <input type="text" placeholder="Username" className="username" />
            Password:
            <input type="password" placeholder="Password" className="password" />
            <button onClick={ handleSignIn }>Sign In</button>
        </div>
    </div>
    )
    
}

export default SignIn;