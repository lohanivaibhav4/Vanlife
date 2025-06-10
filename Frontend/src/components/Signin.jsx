import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import axios from "axios"

export default function Signin(){
    const [loginFormData,setLoginFormData] = React.useState({email:"",password:""})
    const location = useLocation()
    const navigate = useNavigate()

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