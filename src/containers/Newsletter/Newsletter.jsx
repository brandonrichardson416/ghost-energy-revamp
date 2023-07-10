import React from 'react'
import './Newsletter.css'
import images from '../../constants/images';

export default function Newsletter() {
  return (
    <div className="ghost__newsletter" style={{backgroundImage: `url(${images.newsletterBg})`}}>
        <div className="ghost__newsletter-container">
            <h1 className="ghost__newsletter-heading">Keep Up With Us!</h1>
            <p className="ghost__newsletter-text">Sign up for our newsletter to keep up with the latest flavors, updates, and giveaways.</p>
            <form>
                <input type="text" placeholder="Email"/>
                <input type="submit" name="" value="Submit"/>
            </form>
        </div>
    </div>
  )
}
