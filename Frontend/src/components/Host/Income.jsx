import MyBarChart from "./MyChart"

export default function Income(){
    return (
        <div className="income-container">
            <div className="income-details">
                <h2>Income</h2>
                <p>Last <span>30 days</span></p>
                <h3>Rs.22,900</h3>
            </div>
            <div className="graph-container">
                <MyBarChart />
            </div>
            <div className="transactions">
                <p>Your transactions (3) <span>Last 30 days</span></p>
                <div><h4>Rs.8,400</h4><p>12-05-25</p></div>
                <div><h4>Rs.6,600</h4><p>22-05-25</p></div>
                <div><h4>Rs.7,900</h4><p>05-06-25</p></div>
            </div>

        </div>
    )
}