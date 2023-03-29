import { useParams } from "react-router-dom";


const Stock = ({ stockInfo }) => {
    const { symbol } = useParams();


    return (
        <div>
            {stockInfo.filter((info) => info.symbol === symbol).map((info) => {
                return (
                    <div key={info}>
                        <h1>Stock Info for {info.name} ({info.symbol})</h1>
                        <h3>Last Price: {info.lastPrice}</h3>
                        <h3>Change: {info.change}</h3>
                        <h3>High: {info.high}</h3>
                        <h3>Low: {info.low}</h3>
                        <h3>Open: {info.open}</h3>
                    </div>
                )
                })
            }
        </div>
    )
}


export default Stock;