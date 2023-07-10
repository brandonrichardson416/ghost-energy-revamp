import React, {useEffect} from 'react'
import 'leaflet/dist/leaflet.css';
import { useMap} from 'react-leaflet/hooks';
import './Map.css'



export default function Map({coord, zoom}) {
    const map = useMap();

   useEffect(()=>{
    map.setView(coord, zoom)
   },[coord])

    console.log('map center:', map.getCenter())
    return null
  return null;
}
