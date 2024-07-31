import React from "react";
import './About.css'
import theam_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/isha.jpg' 
//import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theam_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img className="about-img" src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I have honed my skills in HTML , CSS , JavaScript , C , C++ , php , vb.NET.</p>
                        <p> Throughout my career, I have had the Achived ReactJS , Git_GitHub , WebDevlopment. I thrive in environments that encourage creativity, foster collaboration, and embrace diversity.</p>
                    </div>
                    <div className="about-skills">

                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:"50%"}}/>
                        </div>

                        <div className="about-skill">
                            <p>JavaSript </p><hr style={{width:"50%"}}/>
                        </div>

                        <div className="about-skill">
                            <p>PHP </p><hr style={{width:"60%"}}/>
                        </div>

                        <div className="about-skill">
                            <p>ReactJs </p><hr style={{width:"50%"}}/>
                        </div>

                        <div className="about-skill">
                            <p>C & C++</p><hr style={{width:"70%"}}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About