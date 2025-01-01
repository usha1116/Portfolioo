import React from "react"
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll"
import profile from '../../assets/isha.jpg'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img className="img" src={profile} alt="" />
      <h1><span>I'm Usha Teli </span></h1>
      <p>I am a Software Devloper with a passion for
        Front-end Devloper.
        In addition to my professional endeavors, I am passionate about Travelling,Listening,Editing,Researching.
        I am excited about the opportunity to WebDevlopment. Thank you for taking the time to learn a bit about me..
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink  className="anchor-link" offset={50} href="#contact">  Connect With Me</AnchorLink> </div>
        <div className="hero-resume"><a href="src\assets\Resume.pdf">My resume </a></div>
      </div>
    </div>
  )
}
export default Hero