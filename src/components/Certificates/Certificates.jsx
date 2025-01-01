import React from "react";
import './Certificates.css'
import theam_pattern from '../../assets/theme_pattern.svg'
import JavaScript from '../../assets/JavaScript .jpg'
import git_github from '../../assets/Git_GitHub.png'
import photoshope from  '../../assets/photoshope_certificate.png'
import reactjs from '../../assets/ReactJS.jpg'
import project_devlopment from '../../assets/Project-devlopment.png'
import AWS from '../../assets/AWS.png'
import forage from '../../assets/forage_certificate.pdf'

const Certificates=()=>{
    return(
        <div id="certificate" className="certificates">
            <div className="certificates-title">
                <h1>My Certificates</h1>
                <img src={theam_pattern} alt="" />

            </div>
            <div className="certificates-container">

                <div className="certificate"> <a href="src\assets\JavaScript .jpg"> <img  className="certificate-img" src={JavaScript} alt="" /> </a></div>
                <div className="certificate"> <a href="src\assets\Git_GitHub.png"> <img className="certificate-img" src={git_github} alt="" /> </a></div>
                <div className="certificate"> <a href="src\assets\photoshope_certificate.png"> <img className="certificate-img" src={photoshope} alt="" /></a> </div>
                <div className="certificate"> <a href="src\assets\ReactJs.jpg"> <img className="certificate-img" src={reactjs} alt="" /> </a></div>
                <div className="certificate">  <a href="src\assets\Project-devlopment.png"><img className="certificate-img" src={project_devlopment} alt="" /></a> </div>
                <div className="certificate">  <a href="src\assets\AWS.png"><img className="certificate-img" src={AWS} alt="" /></a> </div>
                <div className="certificate">  <a href="src\assets\forage_certificate.pdf"><img className="certificate-img" src={forage} alt="" /></a></div>

            </div>
        </div>
    )
}
export default Certificates