import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init'
import './SignUp.css'

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user, error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const onEmailBlur = e => {
        setEmail(e.target.value)
    }
    const onPasswordBlur = e => {
        setPassword(e.target.value)
    }

    const onConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value)
    }

    const from = location?.from?.pathname || '/';
    
    if (user) {
        navigate(from, {replace: true})
    }

    const onFormSubmit = e => {
        e.preventDefault()

        if (password.length < 6) {
            setErrors("Password should have at least 6 Characters.")
            return
        }
        if (password !== confirmpassword) {
            setErrors("Password didn't match.")
            return
        }

        createUserWithEmailAndPassword(email, password)

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
                <p style={{color: 'red'}}>{ errors }</p>
                <p style={{color: 'red'}}>{ error }</p>
                <input className='submit-btn' type="submit" value="Sign Up" />

            </form>
        </div>
    );
};

export default SignUp;