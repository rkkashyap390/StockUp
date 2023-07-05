import "./app.css"
import CurrentMarket from "./components/orderbook/orderbook.js";
import Graph from "./components/graph/graph.js";
import Header from "./components/header/header.js";
import UserPortfolio from "./components/userportfolio/userportfolio.js";
import TradeHistory from "./components/tradehistory/tradehistory.js";
import BuyAndSell from "./components/buyandsell/buyandsell.js";
import Footer from "./components/footer/footer.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <div className="cmg-container">
          <Graph />
          <CurrentMarket />
        </div>
        <div className="upthbs-container">
          <div className="user-and-trade-container"> 
            <UserPortfolio />
            <TradeHistory />
          </div>
          <BuyAndSell/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
