import React from 'react';
import "./userportfolio.css"
import { AiOutlinePlusCircle } from "react-icons/ai/index.esm.js"

// var userList = [
//     {
//         user_name: "A",
//         quantity: "10",
//         portfolio_value: "2468.02"
//     }
// ]


// const UserData = (props) => {
//     const { userdata } = props;

//     return (
//         <div className='userportfolio-user-container'>
//             <span>{userdata.user_name}</span>
//             <span>{userdata.quantity}</span>
//             <span>{userdata.portfolio_value}</span>
//         </div>
//     );
// }

const UserPortfolio = () => {
    function editUser() {
        
    }
    
    return (
        <div className='user-portfolio-container'>
            <div className='user-portfolio-heading'>
                <div >
                    <span style={{ textAlign: "center", color: "#2146C7", fontWeight: "bold", fontSize:"18px"}}> USER PORTFOLIO</span>
                    <AiOutlinePlusCircle style={{ fontSize: "20px", fontWeight: "bold", color: "#2146C7" }} onClick={editUser} />
                </div>
                <div>
                    <span>User Name</span>
                    <span>Stocks</span>
                    <span>Fiat $</span>
                </div>
            </div>
            {/* <div className='user-portfolio-data'>
                {
                    userList.map((eachItem, index) => <UserData key={index} userdata={eachItem} />)
                }
            </div> */}
        </div>
    );
}

export default UserPortfolio;