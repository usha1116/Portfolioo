import React from "react"
import './Contact.css'
import theam_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fa7e32e8-29fe-4d5d-a8d1-b8d09b8ece20");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };



    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get In Touch </h1>
                <img src={theam_pattern} alt="" />

            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new Projects, so feel free  to send me a message about anything that you want me to work on. you can contact anytime</p>
                    <div className="contact-details">

                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>ushasahu1116@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Bhavnagar,Gujarat,India</p>
                        </div>

                        <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>8780698128</p>
                        </div>

                    </div>
                </div>
                <form  onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name"/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email"/>
                    <label htmlFor="">Write your message here</label>
                    <textarea type="message"  rows="8" placeholder="Enter your message " ></textarea>
                    <button type="submit" className="contact-submit"> Submit now</button>
                </form>
            </div>
        </div>

    )
}
export default Contact