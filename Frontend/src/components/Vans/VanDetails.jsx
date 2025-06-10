import axios from "axios"
import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

export default function VanDetails(){
    const [van,setVan] = React.useState({})
    const params = useParams()
    const location = useLocation()
    const search  = location?.state?.search

    React.useEffect(()=>{
        axios.get(`/api/v1/vans/${params.id}`)
            .then(res=>setVan(res.data))
            .catch((err)=>console.log(err))
    },[params.id])

    return(
         <div className="van-details-container">
            <Link to={`../?${search}`} relative="path" className="back-to-vans">&larr;
                <span>Back to {search ?search.slice(5) : 'all'} vans</span>
            </Link>
            
            <div className="van-details-div">
                <img src={van.imageUrl} alt="van-image" />
                <span className="simple">{van.type}</span>
                <h2>{van.name}</h2>
                <p><span className="price">Rs.{van.price}</span>/hr</p>
                <p className="van-desc">{van.description}</p>
                <Link to='.'><button>Rent this van</button></Link>
            </div>
         </div>
    )
}