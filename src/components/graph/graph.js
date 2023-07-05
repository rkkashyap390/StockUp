import React from "react";
import "./graph.css"


const Graph = () => {
    return (
        <div className="graph-container">
         <div className='graph-heading'>
             <div>
                <span>Asset1</span>
                <span>Price : ₹100.4587</span>
             </div>
        </div>
        <div>
            {/* trading chart goes here.... */}
        </div>
        </div>
    );
}
 
export default Graph;