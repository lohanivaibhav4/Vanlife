import { FaStar } from "react-icons/fa";
export default function Reviews(){
    return(
        <div className="review-container">
             <div className="review-info">
                <h2>Your reviews</h2>
                <p>Last <span>30 days</span></p>
             </div>
             <p><span>4.9</span> <FaStar className="star"/>overall ratings</p>
             <div className="ratings-graph">
                <div><p>5<FaStar className="star"/></p> <div className="filled"></div> 100%</div>
                <div><p>4<FaStar className="star"/></p> <div></div> 100%</div>
                <div><p>3<FaStar className="star"/></p> <div></div> 100%</div>
                <div><p>2<FaStar className="star"/></p> <div></div> 100%</div>
                <div><p>1<FaStar className="star"/></p> <div></div> 100%</div>
             </div>
             <h3>Reviews (2)</h3>
             <div>
                <div>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                </div>
                <div className="user-name">
                    <h4>Vaibhav Lohani</h4>
                    <p>22-05-25</p>
                </div>
                <div>
                    <p>The beach bum is such as awesome van! Such as comfortable trip.
                         We had it for 2 weeks and there was not a single issue.
                          Super clean when we picked it up and the host is very comfortable
                           and understanding. Highly recommend!</p>
                </div>
             </div>
        </div>
    )
}