import { Link } from "react-router-dom"

export default function Signin(){
    return(
        <div className="signin-div">
            <h2>Sign in to your account</h2>
            <form action="">
                <input type="email" placeholder="Email address"/>
                <input type="password" placeholder="Password" />
                <button type="submit">Sign in</button>
            </form>
            <p>Don't have an account? <Link to='signup'>Create one now</Link></p>
        </div>
    )
}