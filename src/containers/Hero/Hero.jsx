import React, {useState, useEffect} from 'react';
import './Hero.css';
import images from '../../constants/images';
import { Link } from 'react-router-dom';


export default function Hero() {

const heroImages = [images.heroImg, images.heroImg2, images.heroImg4, images.heroImg3];
const [value, setValue] = useState(0);

useEffect(()=>{
    const interval = setInterval(() =>{
        setValue((v) => {
            return v === 3 ? 0 : v + 1;
        });
    }, 2000);
    return () => clearInterval(interval);
}, []);

  return (
    <div className="ghost__hero" style={{backgroundImage: `url(${images.backgroundBlack})`}}>
        <p className="ghost__hero-subheading">Authentic Flavors. Zero Sugars. No BS.</p>
        <h1 className="ghost__hero-title">FEEL GOOD ENERGY</h1>
        <div className="ghost__hero-image">
        <img src={heroImages[value]}/>
        </div>
        <Link to='/products' className="ghost__hero-cta">Secure A Case</Link>
    </div>
  )
}
