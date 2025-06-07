import { NavLink, Outlet, Link } from 'react-router-dom'
import { FaCopyright } from "react-icons/fa";
export default function HomeLayout(){
    const date = new Date().getFullYear()
    return(
        <>
            <header>
                <Link to="/"><h1>#VANLIFE</h1></Link>
                <nav className='main-nav'>
                    <NavLink to="host" className={({isActive})=> isActive? 'active' : ''}>Host</NavLink>
                    <NavLink to="about" className={({isActive})=> isActive? 'active' : ''}>About</NavLink>
                    <NavLink to="vans" className={({isActive})=> isActive? 'active' : ''}>Vans</NavLink>
                </nav>
            </header>
            <Outlet />
            <footer>
                <span className='copyright'><FaCopyright /></span>
                <p>{`${date}`} <span>#VANLIFE</span></p>
            </footer>
        </>
    )
}