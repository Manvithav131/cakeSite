import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'
function Footer() {
    return(
        <div className="footer">
            <div className="content">Visit Us - Sahyadri college of Engineering and Management, Adyar,Manglore -575005
                <div>mail-To:manvitha.vinay@gmail.com</div>
                <div>mail-To:manvith.cs23@sahyadri.edu.in</div>
                <div>Contact us -</div>
                <div>9686515869</div>
                <div>4475849886</div>
                <div className="Quote">Every cake has a story to tell </div>
            </div>
        <div className="footer-right">
            
            <div className="Author">
                <h1>~ Manvitha</h1>
            </div>
            <ul className="navbar-links">
               <li><Link to = "/">Home</Link></li>
               <li><Link to = "/about">About</Link></li>
               <li><Link to = "/contact">Contact</Link></li>
               
            </ul>
                
            
        </div>
        </div>
    )
}
export default Footer;