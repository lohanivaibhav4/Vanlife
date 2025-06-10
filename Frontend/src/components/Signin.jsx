import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { CiLogout } from "react-icons/ci";

export default function Signin(){
    const [loginFormData,setLoginFormData] = React.useState({email:"",password:""})
    const location = useLocation()
    const navigate = useNavigate()
    const login = localStorage.getItem('login')
    function logout(){
        localStorage.clear()
        navigate('/')
    }
    if(login){
        return (<div className="logged-in">
        <h2>You're already logged in</h2>
        <div onClick={logout}><CiLogout /></div>
        </div>)
    }

    function handleSubmit(e){
        e.preventDefault() 
        axios.post('/api/v1/signin',{loginFormData})
            .then(res=> {
                if(res.data.email == loginFormData.email && res.data.password == loginFormData.password){
                    localStorage.setItem("login",true)
                    navigate('/host')
                }
            })
            .catch((err)=>console.log(err.response.data.message))
    }

    function handleChange(e){
        const { name, value } = e.target
        setLoginFormData((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))
    }
  
    
    return(
        <div className="signin-div">
            <h2>Sign in to your account</h2>
            <p className="not-login">{location?.state?.message}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email address"
                    onChange={handleChange}
                    value={loginFormData.email}
                    required
                />
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    value={loginFormData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Sign in</button>
            </form>
            <p>Don't have an account? <Link to='signup'>Create one now</Link></p>
        </div>
    )
}