import React from "react";
import './Certificates.css'
import theam_pattern from '../../assets/theme_pattern.svg'

const Certificates=()=>{
    return(
        <div className="certificates">
            <div className="certificates-title">
                <h1>My Certificates</h1>
                <img src={theam_pattern} alt="" />

            </div>
            <div className="certificates-container">

                <div className="certificate">  <img  className="certificate-img" src="src\assets\JavaScript .jpg" alt="" /> </div>
                <div className="certificate">  <img className="certificate-img" src="src\assets\Git_GitHub.png" alt="" /> </div>
                <div className="certificate">  <img className="certificate-img" src="src\assets\photoshope_certificate.png" alt="" /> </div>
                <div className="certificate">  <img className="certificate-img" src="src\assets\ReactJs.jpg" alt="" /> </div>
                <div className="certificate">  <img className="certificate-img" src="src\assets\Project-devlopment.png" alt="" /> </div>
                <div className="certificate">  <img className="certificate-img" src="src\assets\AWS.png" alt="" /> </div>

            </div>
        </div>
    )
}
export default Certificates