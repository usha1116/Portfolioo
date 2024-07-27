import React from "react";
import './About.css'
import theam_pattern from '../../assets/theme_pattern.svg'
//import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theam_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className="about-img" src="src\assets\isha.jpg" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About