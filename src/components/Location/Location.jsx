import React, {useContext, useState} from 'react'
import './Location.css'

export default function Location({name, address, position, setCoord, handleRef}) {
    
  function scrollToRef(){
      handleRef.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className="ghost__location">
        <h3 className="ghost__location_name">{name}</h3>
        <p className="ghost__location_address">{address}</p>
        <button className="ghost__location_view-btn" onClick={() => setCoord({lat: position[0], lng: position[1], zoom: 200})}>View on Map </button>
        <button className="ghost__location_view-btn-600" onClick={() => {setCoord({lat: position[0], lng: position[1], zoom: 200}); handleRef.current.scrollIntoView({behavior: 'smooth'})}}>View on Map </button>
    </div>
  )
}
