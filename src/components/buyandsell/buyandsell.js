import { useState } from 'react';
import "./buyandsell.css"

const BuyAndSell = () => {

    const [order, setOrder] = useState({
        buy_sell: 0,      // 0 for buy && 1 for sell
        price: "",
        name: "",
        quantity: "",
        market_type: "limit"    // 0 for limit && 1 for market
    })


    function handleChange(event) { 
        const {name,value} = event.target;
        setOrder({ ...order, [name]: value })
    }


    const handleSubmit = async(event) =>{
        event.preventDefault();
        // backend goes here
    }


    function orderBuy() {
        let buyEl = document.getElementById("buy");
        let sellEl = document.getElementById("sell");
        let buyBox = document.getElementById("buy-container");
        let sellBox = document.getElementById("sell-container");
        buyEl.classList.add("buy-button-after-click");
        sellEl.classList.remove("sell-button-after-click");
        buyBox.style.display = "flex";
        sellBox.style.display = "none";
        order.buy_sell = 0;
    }
    
    function orderSell() {
        let sellEl = document.getElementById("sell");
        let buyEl = document.getElementById("buy");
        let buyBox = document.getElementById("buy-container");
        let sellBox = document.getElementById("sell-container");
        sellEl.classList.add("sell-button-after-click");
        buyEl.classList.remove("buy-button-after-click");
        buyBox.style.display = "none";
        sellBox.style.display = "flex";
        order.buy_sell = 1;
    }
 
    return (
        <div className='bs-container'>
            <div className='bs-btn-container'>
                <button id='buy' className='buy-button-after-click' onClick={orderBuy}>BUY</button>
                <button id='sell' onClick={orderSell}>SELL</button>
            </div>
            <div >
                <form id='buy-container' style={{ display: "flex" }} className="buy-container" onSubmit={handleSubmit}>
                    <select className='market-type' name='market_type' value={order.market_type} onChange={handleChange}>
                        <option value="limit">Limit</option>
                        <option value="market">Market</option>
                    </select>

                    <label>
                        Select User:
                        <input name='name' type="text" className='user' value={order.name} onChange={handleChange} />
                    </label>
                    <label>
                        Stock Amount:
                        <input name='quantity' type='number' className='stock-amount' value={order.quantity} onChange={handleChange} />
                    </label>
                    {
                        order && (order.market_type === "limit") ? 
                            <label>
                                At Price:
                                <input name='price' type='number' className='price' value={order.price} onChange={handleChange} />
                            </label>
                        : null
                    }

                    <button>Order</button>
                </form>
            </div>

            <div >
                <form id='sell-container' style={{ display: "none" }} className="sell-container" onSubmit={handleSubmit}>
                    <select className='market-type' name='market_type' value={order.market_type} onChange={handleChange}>
                        <option value="limit">Limit</option>
                        <option value="market">Market</option>
                    </select>

                    <label>
                        Select User:
                        <input type='text' className='user' name='name' value={order.name} onChange={handleChange} />
                    </label>

                    <label>
                        Stock Amount:
                        <input type='number' className='stock-amount' name='quantity' value={order.quantity} onChange={handleChange} />
                    </label>

                    {
                        order && (order.market_type === "limit") ? 
                            <label>
                                At Price:
                                <input name='price' type='number' className='price' value={order.price} onChange={handleChange} />
                            </label> 
                        : null
                    }

                    <button>Order</button>
                </form>
            </div>
        </div>
    );
}

export default BuyAndSell;