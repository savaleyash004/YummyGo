import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='logo' src={assets.logo} alt="" />
           <p>Your satisfaction is our priority. YummyGo provides quick, reliable food delivery that’s as enjoyable as dining out. We appreciate your trust and look forward to serving you again.</p>
           <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>        
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
        </div>
        <div className="footer-content-right">
        <h2>Get in Touch</h2>
        <ul> 
        <li>(415) 555‑0132</li>
        <li>yummygo@gmail.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © YummyGo.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
