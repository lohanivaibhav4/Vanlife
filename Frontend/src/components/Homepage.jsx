import { Link } from "react-router-dom"
export default function Homepage(){
    return(
        <>
            <div className="home-div">
                <h2>You got the travel plans, we got the travel vans.</h2>
                <p>Add adventure to your life by joining the #vanlife movement.
                   Rent the perfect van to make your perfect road trip.
                </p>
                <button><Link to="/vans">Find your van</Link></button>
            </div>
        </>
    )
}