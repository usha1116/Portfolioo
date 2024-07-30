import React from "react";
import './Certificates.css'
import theam_pattern from '../../assets/theme_pattern.svg'

const Certificates=()=>{
    return(
        <div id="certificate" className="certificates">
            <div className="certificates-title">
                <h1>My Certificates</h1>
                <img src={theam_pattern} alt="" />

            </div>
            <div className="certificates-container">

                <div className="certificate"> <a href="src\assets\JavaScript .jpg"> <img  className="certificate-img" src="src\assets\JavaScript .jpg" alt="" /> </a></div>
                <div className="certificate"> <a href="src\assets\Git_GitHub.png"> <img className="certificate-img" src="src\assets\Git_GitHub.png" alt="" /> </a></div>
                <div className="certificate"> <a href="src\assets\photoshope_certificate.png"> <img className="certificate-img" src="src\assets\photoshope_certificate.png" alt="" /></a> </div>
                <div className="certificate"> <a href="src\assets\ReactJs.jpg"> <img className="certificate-img" src="src\assets\ReactJs.jpg" alt="" /> </a></div>
                <div className="certificate">  <a href="src\assets\Project-devlopment.png"><img className="certificate-img" src="src\assets\Project-devlopment.png" alt="" /></a> </div>
                <div className="certificate">  <a href="src\assets\AWS.png"><img className="certificate-img" src="src\assets\AWS.png" alt="" /></a> </div>

            </div>
        </div>
    )
}
export default Certificates