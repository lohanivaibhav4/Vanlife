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
            <div className="host-vans-tile" key={van.id}>
                <img src={van.imageUrl} alt="van-image" />
                <h3>{van.name}</h3>
                <p>Rs.{van.price}/hr</p>
            </div>
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