import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const onEmailBlur = e => {
        setEmail(e.target.value)
    }
    const onPasswordBlur = e => {
        setPassword(e.target.value)
    }

    const onConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }

    const onFormSubmit = e => {
        e.preventDefault()

    }

    return (
        <div className='form-container'>
            <form onSubmit={onFormSubmit}>
                <h2>Sign Up</h2>
                <div className='input-group'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name="" id="" />
                </div>
                <div className='input-group'>
                    <label htmlFor="">Your Email</label>
                    <input onBlur={onEmailBlur} type="email" name="" id="" />
                </div>
                <div className='input-group'>
                    <label htmlFor="">Your Passowrd</label>
                    <input onBlur={onPasswordBlur} type="password" name="password" id="" />
                </div>
                <div className='input-group'>
                    <label htmlFor="">Confirm Passowrd</label>
                    <input onBlur={onConfirmPasswordBlur} type="password" name="password" id="" />
                </div>
                <div className='little-msg'><Link to={'/register'}>Already have an Account. <span className='color'> Log In</span></Link></div>
                <input className='submit-btn' type="submit" value="Sign Up" />

            </form>
        </div>
    );
};

export default SignUp;