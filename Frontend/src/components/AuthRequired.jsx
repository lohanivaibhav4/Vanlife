import { Outlet, Navigate } from "react-router-dom"
export default function AuthRequired(){
    const auth = localStorage.getItem("login")
    if(!auth){
        return <Navigate to='/signin' state={{message:"You need to login first!"}} />
    }else
    return < Outlet />
}