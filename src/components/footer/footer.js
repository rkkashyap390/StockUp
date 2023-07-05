import React from 'react';
import {AiOutlineCopyrightCircle} from "react-icons/ai/index.esm.js"
import "./footer.css"

const Footer = ()=>{
  return(
    <div className='footer-container'>
        <AiOutlineCopyrightCircle/> 
        <p> StockUp. All rights reserved</p>
    </div>
  );
}

export default Footer