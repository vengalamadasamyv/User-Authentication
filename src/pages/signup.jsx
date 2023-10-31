import React, { useState } from 'react';
import Log from './login';
import '../styles/signup.css';
import {Link, useNavigate} from "react-router-dom";

function Signup(){
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return(
        <div className="signup-card">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br/><br/>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/><br/>
                <label>Email</label><br/><br/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required/><br/>
                <label>Password</label><br/><br/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required/><br/>
                <button type="submit"> Register </button>
                <p className="already"> Already have an account ?</p> <Link to="/login">Login</Link>
                
            </form>
        </div>
    )
}

export default Signup