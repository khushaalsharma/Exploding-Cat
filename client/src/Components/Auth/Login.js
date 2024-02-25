import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./AuthStyles.css";

const Login = () => {

    const [username, setUsername] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleLogin = () => {

    }

    return (
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='authCard'>
                    <h1>Log In</h1>
                    <form onSubmit={handleLogin}>
                        <div className='formInput'>
                            <input
                                name='username'
                                type='text'
                                value={username}
                                onChange={handleUsername}
                                placeholder='Your Username'
                            />
                        </div>
                        <button type='submit' className='btn btn-danger'>Log In</button>
                    </form>
                    <p>OR</p>
                    <p className='signup' onClick={() => {
                        window.location.href = "/register"
                    }}>Click here to Sign Up</p>
                </div>
            </div>
            <div className='col-md-2'></div>
        </div>
    )
}

export default Login
