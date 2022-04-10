import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <form>
                <h2>Log In</h2>
                <div className='input-group'>
                    <label htmlFor="">Your Email</label>
                    <input type="email" name="" id="" />
                </div>
                <div className='input-group'>
                    <label htmlFor="">Your Passowrd</label>
                    <input type="email" name="" id="" />
                </div>
                <div className='little-msg'><Link to={'/register'}>New to Ema Jhon. <span className='color'> Sign Up</span></Link></div>
                <input className='submit-btn' type="submit" value="Sign Up" />

            </form>
        </div>
    );
};

export default LogIn;