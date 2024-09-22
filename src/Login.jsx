import React, { useState } from 'react'

const Login = ({register}) => {

    let [login,setLogin] = useState({
        email : '',
        password : ''
    })
    let handleChange = (e)=>{
        let{name,value} = e.target;
        setLogin({...login,[name]:value})
    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(login);
        if (register.Email == login.email && register.Password == login.password) {
            console.log("Login Successful");
            alert(`Login Successfull..  Welcome ${register.userName}`);
        }
        else{
            console.log("Login Failed");
            console.log("Please Try Again");
            alert(`Login Failed.  Please Try Again`)
        }

    }
    return (
        <div className='right'>
            <h1 id='loginhead'>Login Page</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" name='email' placeholder='Email' value={login.email} onChange={handleChange}/>
                <input type="password" name="password" placeholder='Password' value={login.password} onChange={handleChange} autoComplete='true'/>
                <input type="submit" value="Login" className='btn login-btn' />
            </form>
        </div>
    )
}

export default Login