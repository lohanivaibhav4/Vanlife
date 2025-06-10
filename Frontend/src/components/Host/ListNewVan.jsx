import { Link } from "react-router-dom";

export default function ListNewVan(){
    return(
        <div className="list-new-div">
            <Link to='..' relative="path" className="back-to-vans">&larr;
                <span>Back to your listed vans</span>
            </Link>
            <h1>List A New Van</h1>
        </div>
    )
}