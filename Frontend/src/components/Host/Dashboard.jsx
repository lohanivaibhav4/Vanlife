import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import HostVans from "./HostVans";

export default function Dashboard(){
    return(
        <>
        <div className="dashboard-container">
            <div className="db-income-container">
                <div className="db-income">
                    <h2>Welcome!</h2>
                    <p>Income last <span>30 days</span></p>
                    <h3>Rs.22,900</h3>
                </div>
                <Link to='income'>Details</Link>
            </div>
            <div className="db-review">
                <h4>Review score</h4>
                <p><FaStar className="star"/><span className="rating">4.9</span>/ 5</p>
                <Link to='reviews'>Details</Link>
            </div>
        </div>
        <HostVans />
        </>
    )
}