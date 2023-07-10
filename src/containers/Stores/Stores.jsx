import React from 'react'
import './Stores.css'
import images from '../../constants/images';
import { Link } from 'react-router-dom';

export default function Stores() {
  return (
    <div className="ghost__stores">
        <h1 className="ghost__stores-heading">Stores</h1>
        <div className="ghost__stores-image">
            <img src={images.storeList}/>
        </div>
        <Link to='/stores' className="ghost__cta">See Locations</Link>
    </div>
  )
}
