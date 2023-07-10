import React, {useEffect, useState, useContext, useRef} from 'react';
import './Stores.css';
import { PageHeader } from '../../containers';
import { useQuery, gql } from '@apollo/client';
import { Location } from '../../components';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import {Icon} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Map} from '../../components';




export default function Stores() {
    
  const mapRef = useRef(null);
    const [activeStore, setActiveStore] = useState(null);
    const [coord, setCoord] = useState({
        lat: 38.9201852,
        lng: -77.0320856,
        zoom: 14
    })

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [32,32]
    })

const locations_query = gql`
query StoreLocations{
    storeLocations(first: 50) {
      address
      createdAt
      id
      location {
        latitude
        longitude
      }
      name
      phoneNumber
      publishedAt
      updatedAt
    }
  }
`




const {data, loading, error} = useQuery(locations_query)
if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  console.log([coord.lat, coord.lng])
  return (
    <div className="ghost__stores-page">
        <PageHeader title={'Stores'}/>
        <div ref={mapRef} className="ghost__stores-page_title">
        <h1>Locations</h1>
        </div>
        <div className="ghost__stores-page_container">
            <div className="ghost__stores-page_location-content">
            <div className="ghost__stores-page_location-list">
            {data.storeLocations.map((location) => (
                <Location handleRef={mapRef} setCoord={setCoord} name={location.name} id={location.id} address={location.address} position={[location.location.latitude, location.location.longitude]}/>
            ))}
            </div>
            </div>
            <div className="ghost__stores-page_map-content">
                <div ></div>
                <div className="ghost__stores-page_map-container">
                <MapContainer center={[coord.lat, coord.lng]} zoom={13} scrollWheelZoom={false} whenCreated={map => this.setHope({map})}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    <Map coord={[coord.lat, coord.lng]} zoom={coord.zoom}/>
    {
        data.storeLocations.map((store)=>{
            return(
                <Marker icon={customIcon} position={[store.location.latitude, store.location.longitude]}>
                        <Popup>
                            {store.name} <br /> {store.address}
                        </Popup>
                </Marker>
            )
        })

    }
  </MapContainer>
                </div>
        </div>
        </div>
    </div>
  )
}
