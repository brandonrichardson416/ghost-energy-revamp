import React from 'react'
import './FeaturedProducts.css'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import images from '../../constants/images'
import { Link } from 'react-router-dom'


export default function FeaturedProducts() {
    const featured_flavors = [
    {id: 10, flavor: 'WARHEADS Sour Watermelon', price: '$29.76', image: images.canWar, paramId: 'sour-watermelon'},
    {id: 7, flavor: 'SWEDISH FISH', price: '$29.99', image: images.canSwedish, paramId: 'swedish-fish'},
    {id: 4, flavor: 'FAZE Pop', price: '$29.99', image: images.canFaze, paramId: 'faze-pop'}
]
  return (
    <div className="ghost__featured-products">
        <FeaturedProduct id={featured_flavors[0].id} name={featured_flavors[0].flavor} image={featured_flavors[0].image} price = {featured_flavors[0].price} paramId={featured_flavors[0].paramId}/>
        <FeaturedProduct id={featured_flavors[1].id} name={featured_flavors[1].flavor} image={featured_flavors[1].image} price = {featured_flavors[1].price} paramId={featured_flavors[1].paramId}/>
        <FeaturedProduct id={featured_flavors[2].id} name={featured_flavors[2].flavor} image={featured_flavors[2].image} price = {featured_flavors[2].price} paramId={featured_flavors[2].paramId}/>
    </div>
  )
}
