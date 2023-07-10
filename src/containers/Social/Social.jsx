import React from 'react'
import './Social.css'
import instafeed from 'instafeed.js'
import images from '../../constants/images';

export default function Social() {
  return (
    <div className="ghost__social" style={{backgroundImage: `url(${images.backgroundBlack})`}}>
        <h1 className="ghost__social-heading">Let's Socialize</h1>
        <p className="ghost__social-text">Stay up to date with the latest GHOST® ENERGY news and join the IG fam.</p>
        <a href="https://www.instagram.com/ghostenergy" target="_blank" className="ghost__cta social">Follow Us</a>
        <div className="ghost__social-gallery">
            <div className="ghost__social-gallery_image">
                <img src={images.ig1}/>
            </div>
            <div className="ghost__social-gallery_image">
                <img src={images.ig2}/>
            </div>
            <div className="ghost__social-gallery_image">
                <img src={images.ig3}/>
            </div>
        </div>
    </div>
  )
}
