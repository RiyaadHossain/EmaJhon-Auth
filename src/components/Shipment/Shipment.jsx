import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }
    return (
        <div className='form-container'>
        <form onSubmit={handleCreateUser}>
            <h2>Shipping Info</h2>
            <div className='input-group'>
                <label htmlFor="">Your Name</label>
                <input onBlur={handleNameBlur} type="text" name="" id="" />
            </div>
            <div className='input-group'>
                <label htmlFor="">Your Email</label>
                <input value={user?.email} readOnly style={{color: 'gray'}} type="email" name="" id="" />
            </div>
            <div className='input-group'>
                <label htmlFor="">Address</label>
                <input onBlur={handleAddressBlur} type="password" name="password" id="" />
            </div>
            <div className='input-group'>
                <label htmlFor="">Phone Number</label>
                <input onBlur={handlePhoneBlur} type="password" name="password" id="" />
            </div>
            <input className='submit-btn' type="submit" value="Confirm Order" />

        </form>
    </div>
    );
};

export default Shipment;