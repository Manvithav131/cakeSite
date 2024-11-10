import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <h1>BAKE HOUSE</h1>
            </div>
            <ul className="navbar-links">
               <li><Link to = "/">Home</Link></li>
               <li><Link to = "/about">About</Link></li>
               <li><Link to = "/contact">Contact</Link></li>
               
            </ul>
                
            
        </div>
    )
}
export default Navbar;