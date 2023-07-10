import React from 'react'
import './Features.css';
import images from '../../constants/images';

export default function Features() {
  return (
    <div className="ghost__features">
        <div className="ghost__features-ft_container">
            <div className="ghost__features-ft_img">
                <img src={images.feature1}/>
            </div>
            <div className="ghost__features-ft_img">
                <img src={images.feature2}/>
            </div>
            <div className="ghost__features-ft_img">
                <img src={images.feature3}/>
            </div>
            <div className="ghost__features-ft_img">
                <img src={images.feature4}/>
            </div>
        </div>
    </div>
  )
}
