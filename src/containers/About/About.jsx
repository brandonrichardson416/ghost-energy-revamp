import React from 'react'
import './About.css';
import images from '../../constants/images';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="ghost__about">
        <div className="ghost__about-content">
            <span><h2 className="ghost__about-subheading">Introducing</h2></span>
            <span><h1 className="ghost__about-heading">Ghost</h1></span>
            <span><h1 className="ghost__about-heading">Energy</h1></span>
            <p className="ghost__about-text">GHOST Energy is the fully transparent, fully loaded, feel good energy drink we've all been waiting for.</p>
            
            <Link to='/products' className="ghost__cta">Secure A Case</Link>
        </div>
        <div className="ghost__about-img_container">
            <div className="ghost__about-img_hand_right">
                <img src={images.handR}/>
            </div>
            <div className="ghost__about-img_hand_left">
                <img src={images.handL}/>
            </div>
            <div className="ghost__about-img_trop_can">
                <img src={images.tropMango}/>
            </div>
            <div className="ghost__about-img_cott_can">
                <img src={images.cottonCan}/>
            </div>
            <div className="ghost__about-img_red_can">
                <img src={images.redberryCan}/>
            </div>
        </div>
    </div>
  )
}
