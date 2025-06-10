import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default function HostVans(){
    const [ hostVans,setHostVans ] = React.useState([])
    React.useEffect(()=>{
        axios.get(`/api/v1/host/vans`,{params:{hostId:"123"}})
            .then(res=> setHostVans(res.data))
            .catch((err)=> console.log(err))
    },[])

    const hostVansElement = hostVans.map((van)=>{
        return (
            <Link to={`/host/vans/${van.id}`} key={van.id} className="host-van-tile-link">
                <div className="host-vans-tile">
                    <img src={van.imageUrl} alt="van-image" />
                    <div className="host-van-tile-info">
                        <h3>{van.name}</h3>
                        <p>Rs.{van.price}/hr</p>
                    </div>
                </div>
            </Link>
        )
    })

    return(
        <div className="host-vans-page">
            <h2>Your listed vans</h2>
            <div className="host-vans-container">{hostVansElement}</div>
            <Link to='listnew' className="list-new-van">List another van</Link>
        </div>
    )
}