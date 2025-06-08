import React from "react";
import axios from "axios";
import { Link,useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams()
  const type = searchParams.get('type')
  

  React.useEffect(() => {
    axios
      .get("/api/v1/vans")
      .then((res) => setVans(res.data))
      .catch((err) => console.log(err));
  }, []);

  const vanDisplayed = type? vans.filter((van)=>van.type == type) : vans

  const vanElements = vanDisplayed.map((van) => {
    const typeStyle = van.type == 'rugged'? 'rugged' :  van.type == 'simple'? 'simple' : 'luxury'

    return (
      <div key={van.id} className="van-tile">
        <Link to={`/vans/${van.id}`}>
          <img src={van.imageUrl} alt="van-image" />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>Rs.{van.price}<span>/hr</span></p>
          </div>
        <span className={typeStyle}>{van.type}</span>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className='vans-container'>
        <h2>Explore our van options</h2>

        <div className="filters">
          <Link to="?type=simple">
          <button className={`${type == 'simple'? 'simple':''}`}>Simple</button>
          </Link>
          <Link to="?type=rugged">
          <button className={`${type == 'rugged'? 'rugged':''}`}>Rugged</button>
          </Link>
          <Link to="?type=luxury">
          <button className={`${type == 'luxury'? 'luxury':''}`}>Luxury</button>
          </Link>
          <Link to="." className="clear-filters">Clear filters</Link>
        </div>

        <div className="vans-div">{vanElements}</div>
      </div>
    </>
  );
}
