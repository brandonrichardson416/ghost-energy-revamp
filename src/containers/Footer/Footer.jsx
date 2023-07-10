import React from 'react'
import './Footer.css'
import images from '../../constants/images';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="ghost__footer">
      <div className="ghost__footer_container">
        <div className="ghost__footer_logo-section">
          <img src={images.logo}/>
        </div>
        <div className="ghost__footer_email-section">
            <h3 className="ghost__footer_heading">Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="ghost__footer_email-form">
                <input type="text" placeholder="Email"/>
                <input type="submit" name="" value="Submit"/>
            </form>
        </div>
        <div className="ghost__footer_social-section">
            <h3 className="ghost__footer_heading">Follow Us</h3>
            <div className="ghost__footer_social-link-container">
              <a href="https://www.facebook.com/GHOST-Energy-101658194990846" target='_blank'>
                <div className="ghost__footer_social-link">
                    <FaFacebookF size={25} style={{color: "black"}}/>
                </div>
                </a>
              <a href="http://instagram.com/ghostenergy" target='_blank'>
                <div className="ghost__footer_social-link">
                    <FaInstagram size={25} style={{color: "black"}}/>
                </div>
              </a>
              <a href="https://youtube.com/ghostlifestyle" target='_blank'>
                <div className="ghost__footer_social-link">
                    <FaYoutube size={25} style={{color: "black"}}/>
                </div>
              </a>
              <a href="https://www.tiktok.com/@ghostenergy" target='_blank'>
                <div className="ghost__footer_social-link">
                    <FaTiktok size={25} style={{color: "black"}}/>
                </div>
              </a>
              <a href="https://discord.gg/ghostlifestyle" target='_blank'>
                <div className="ghost__footer_social-link">
                    <FaDiscord size={25} style={{color: "black" }}/>
                </div>
              </a>
            </div>
        </div>
        </div>
        <div className="ghost__footer_disclaimer">
          <p>DISCLAIMER: This page was designed/developed by Brandon Richardson and is NOT the official page of GHOST Energy or any other brands. Just a fun little project.</p>
        </div>
    </div>
  )
}
