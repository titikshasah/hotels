import React from "react";
import {NavLink} from "react-router-dom"
function Navbar()
{


    return(
        <>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/services">Service</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Conatct</NavLink>
                    </li>
                    <NavLink to="/" className="btn btn-warning btn-lg text-center" style={{fontSize: "35px"}}>Book Online</NavLink>
                        <br/><br/>

                </ul>
                <br/><br/>
                
        </>
    );
}
export default Navbar;