import React from "react"
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img className="img" src="src\assets\isha.jpg" alt="" />
      <h1><span>I'm Usha Teli </span></h1>
      <p>I am a Software Devloper with a passion for
        Front-end Devloper.
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