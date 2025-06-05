import React from "react"

export default function Vans(){
    const [ vans, setVans ] = React.useState([])

    React.useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>res.json())
        .then(data=> setVans(data.slice(0,20)))
    },[])
    
    const vanElements = vans.map((van)=> {
       return ( <div key={van.id}>
            <p>{van.title}</p>
        </div>)
    })
    
    
    return(
        <div className="vans-div">
            <h2>Explore our van options</h2>
            <div className="filters">

            </div>
            <div>
                {vanElements}
            </div>
        </div>
    )
}