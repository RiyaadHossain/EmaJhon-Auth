import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [errors, setErrors] = useState('')

    const onEmailBlur = e => {
        setEmail(e.target.value)
    }
    const onPasswordBlur = e => {
        setPassword(e.target.value)
    }

    const onFormSubmit = e => {
        e.preventDefault()
        
    }

    return (
        <div className='form-container'>
            <form onSubmit={onFormSubmit}>
                <h2>Log In</h2>
                <div className='input-group'>
                    <label htmlFor="">Your Email</label>
                    <input onBlur={onEmailBlur} type="email" name="" id="" />
                </div>
                <div className='input-group'>
                    <label htmlFor="">Your Passowrd</label>
                    <input onBlur={onPasswordBlur} type="email" name="" id="" />
                </div>
                <div className='little-msg'><Link to={'/signup'}>New to Ema Jhon. <span className='color'> Sign Up</span></Link></div>
                <p style={{color: 'red'}}>{ errors }</p>
                <p style={{color: 'red'}}>{ error }</p>
                <input className='submit-btn' type="submit" value="Log In" />

            </form>
        </div>
    );
};

export default LogIn;