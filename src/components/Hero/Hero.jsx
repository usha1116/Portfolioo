import React from "react"
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img className="img" src="src\assets\isha.jpg" alt="" />
      <h1><span>I'm Usha Teli </span>Fronted Devloper</h1>
      <p>I am a Software Devloper with a passion for
        Front-end Devloper.I have honed my skills in HTML,
        CSS , JavaScript , C , C++ , php , vb.NET.
        Throughout my career, I have had the Achived ReactJS , Git_GitHub , WebDevlopment.
        I thrive in environments that encourage creativity, foster collaboration, and embrace diversity.
        In addition to my professional endeavors, I am passionate about Travelling,Listening,Editing,Researching.
        I am excited about the opportunity to WebDevlopment. Thank you for taking the time to learn a bit about me..
      </p>
      <div className="hero-action">
        <div className="hero-connect"> Connect With Me </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}
export default Hero