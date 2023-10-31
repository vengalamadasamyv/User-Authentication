import React,{useState} from "react";
import '../styles/login.css';
import {Link, useNavigate} from "react-router-dom";

function Login(){
    const [formData, setFormData] = useState({
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
        <div className="login-card">
            <h1>Login Form</h1>
            <form onClick={handleSubmit}>
                <label>Email</label><br/><br/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required/><br/>
                <label>Password</label><br/><br/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required/><br/>
                <button type="submit"> Login </button>
            </form>
        </div>
    )
}

export default Login