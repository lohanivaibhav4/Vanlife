import { Link } from "react-router-dom"
export default function HostVanDetails(){
    return (

        <div className="host-van-details-container">
            <Link to='..' relative="path" className="back-to-vans">&larr;
                <span>Back to your vans</span>
            </Link>
            <h1>Host Van Details</h1>
        </div>
    )
}