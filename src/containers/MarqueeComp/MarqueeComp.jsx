import React from 'react';
import './MarqueeComp.css';
import Marquee from 'react-fast-marquee';

export default function MarqueeComp() {
  return (
    <div className="ghost__marquee">
        <Marquee>
        <div className="ghost__marquee-text">
            <span>Vegan Friendly • Soy Free • Gluten Free • Sugar Free</span>
        </div>

        <div className="ghost__marquee-text">
            <span>Vegan Friendly • Soy Free • Gluten Free • Sugar Free</span>
        </div>
        </Marquee>
    </div>
  )
}
