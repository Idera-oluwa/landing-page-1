import React from 'react'
import './Footer.css'
import {FaFacebook, FaInstagram, FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa'

function Footer() {
    return (
        <div className='_total'>
        <div className='footer-container'>
        <div className='suscribe-container'>
            <h1 className='suscribe-header'>Suscribe to our Newsletter</h1>
            <div clasName='footer-form-container'>
                <input type='email' placeholder='Enter Email' className='footer-input-container'/>
                <button type='submit' className='footer-button-container'>Submit</button>
            </div>
            </div>
            <div className='footer-list-container'>
                <div>
               <h2 className='footer-heading'>About Us</h2> 
               <p className='footer-items'>How it works</p>
               <p className='footer-items'>Testimonials</p>
               <p className='footer-items'>Careers</p>
               <p className='footer-items'>Investors</p>
               <p className='footer-items'>Terms of Service</p>
               </div>
               <div>
                   <h2 className='footer-heading'>Social Media</h2>
                   <p className='footer-items'>Instagram</p>
                   <p className='footer-items'>Facebook</p>
                   <p className='footer-items'>Youtube</p>
                   <p className='footer-items'>Twitter</p>
               </div>
               <div>
                   <h2 className='footer-heading'>Contact Us </h2>
               <p className='footer-items'>Contact</p>
               <p className='footer-items'>Support</p>
               <p className='footer-items'>Sponsorship</p>
               </div>
            </div>
            <h1 className='nav-logo footer'>Food<span className='nav-logo-span'>splash</span></h1>
            <p>FoodSplash © 2022</p>
            <div className='footer-icons-container'>
                <FaFacebook className='footer-icon'/>
                <FaInstagram className='footer-icon'/>
                <FaYoutube className='footer-icon'/>
                <FaTwitter className='footer-icon'/>
                <FaLinkedin className='footer-icon'/>
            </div>
        </div>
        </div>
    )
}

export default Footer
