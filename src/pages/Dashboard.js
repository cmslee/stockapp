import { Link } from "react-router-dom";

function Dashboard (props) {
    const {stocks} = props

    return (
 
        <div className='stocks'>
            <h1>Most Active Stocks</h1>
            {stocks.map(stock => {
                const {name, symbol} = stock;

                return(
                    <Link to={`/stocks/${symbol}`}>
                    <h2>{name} ({symbol})</h2>
                    </Link>
                )
            })
            }
        </div>
    )
}

export default Dashboard;