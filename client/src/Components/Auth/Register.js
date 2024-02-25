import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./AuthStyles.css";

const Register = () => {

    const [details, setDetails] = useState({
        name: "",
        username: ""
    });

    const handleForm = (e) => {
        const {value, name} = e.target;

        setDetails({
            ...details, [name]: value
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='authCard'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleLogin}>
                        <div className='formInput'>
                            <input
                                name='name'
                                type='text'
                                value={details.name}
                                onChange={handleForm}
                                placeholder='Your Name'
                            />
                        </div>
                        <div className='formInput'>
                            <input
                                name='username'
                                type='text'
                                value={details.username}
                                onChange={handleForm}
                                placeholder='Your Username'
                            />
                        </div>
                        <button type='submit' className='btn btn-success'>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className='col-md-2'></div>
        </div>
    )
}

export default Register
