import React from "react"
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className="footer-img" src={logo} alt="" />
                    <p> </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="enter your email" />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>

            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left"> &copy; Usha Teli .All rights reserved. </p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer