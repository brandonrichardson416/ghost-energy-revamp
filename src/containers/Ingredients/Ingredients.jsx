import React from 'react';
import './Ingredients.css';
import images from '../../constants/images';
import { BsPatchCheckFill } from 'react-icons/bs';

export default function Ingredients() {
  return (
    <div className="ghost__ingredients">
        <div className="ghost__ingredients-image">
            <img src={images.jazzyFits}/>
        </div>
        <div className="ghost__ingredients-content">
            <span><h2 className="ghost__ingredients-subheading">Fully</h2></span>
            <span><h1 className="ghost__ingredients-heading">Transparent</h1></span>
            <span><h1 className="ghost__ingredients-heading">Energy</h1></span>
            <p className="ghost__ingredients-text">No sugar. No artificial colors. No BS. GHOST ENERGY combines 200mg of natural caffeine with brain-boosting nootropics to deliver the perfect combo of energy and focus.</p>
            <ul>
                <li><BsPatchCheckFill style={{marginRight: "10px"}}/> GHOST Full Disclosure Label</li>
                <li><BsPatchCheckFill style={{marginRight: "10px"}}/> 200mg Natural Caffeine</li>
                <li><BsPatchCheckFill style={{marginRight: "10px"}}/> 1000mg Camipure L-Camitine</li>
                <li><BsPatchCheckFill style={{marginRight: "10px"}}/> 150mg Alpha-GPC</li>
                <li><BsPatchCheckFill style={{marginRight: "10px"}}/> 100mg NeuroFactor</li>
                <li><BsPatchCheckFill style={{marginRight: "10px"}}/> 25mg AstraGin</li>
            </ul>
        </div>
    </div>
  )
}
