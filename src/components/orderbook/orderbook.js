import React from 'react';
import "./orderbook.css"

const CurrentMarket = ()=>{
    return (
        <div className='current-market-container'>
        <div className='current-market-heading'>
            <span style={{textAlign:"center",color:"#2146C7",fontWeight:"bold"}}>ORDER BOOK</span>
             <div>
                <span>Volume</span>
                <span>Buy Price</span>
                <span>Sell Price</span>
                <span>Volume</span>
             </div>
        </div>
        <div></div>
        </div>
    );
}

export default  CurrentMarket;