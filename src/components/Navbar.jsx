import React from "react"
import './Navbar.css'

const Navbar =()=>{
  return(
    <div className="navbar">

    <img className="image" src="src\assets\logo.png" alt="" />
    
    <ul className="nav-menu">
        <li> Home </li>
        <li> About </li>
        <li> Certificats</li>
        <li> Portfolio</li>
        <li> Contact</li>
    </ul>

    <div className="nav-connect">
        Connect
    </div>
    </div>
  )
}
export default Navbar