import React from 'react';
import "./tradehistory.css"

const TradeHistory = ()=>{
    return (
        <div className='trade-history-container'>
        <div className='trade-history-heading'>
            <span style={{textAlign:"center",color:"#2146C7",fontWeight:"bold",fontSize:"18px"}}>TRADE HISTORY</span>
             <div>
                <span>Price</span>
                <span>Volume</span>
                <span>Time</span>
             </div>
        </div>
        </div>
    );
}

export default  TradeHistory;