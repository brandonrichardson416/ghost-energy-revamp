import React from 'react'
import './MoreProducts.css'
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct'
import data from '../../constants/data'


export default function MoreProducts({currentId}) {

  
  return (
    <div className="ghost__more-products">
        <FeaturedProduct id={data[currentId == 10 ? 8 : currentId].id} name={data[currentId == 10 ? 8 : currentId].flavor} image={data[currentId == 10 ? 8 : currentId].image} price = {data[currentId == 10 ? 8 : currentId].price} paramId={`${data[currentId == 10 ? 8 : currentId].paramId}`}/>
        <FeaturedProduct id={data[currentId + 1] === undefined ? data[0].id : data[currentId + 1].id} name={data[currentId + 1] === undefined ? data[0].flavor : data[currentId + 1].flavor} image={data[currentId + 1] === undefined ? data[0].image : data[currentId + 1].image} price = {data[currentId + 1] === undefined ? data[0].price : data[currentId + 1].price} paramId={`${data[currentId + 1] === undefined ? data[0].paramId : data[currentId + 1].paramId}`}/>
        <FeaturedProduct id={data[currentId + 2] === undefined ? data[1].id : data[currentId + 2].id} name={data[currentId + 2] === undefined ? data[1].flavor : data[currentId + 2].flavor} image={data[currentId + 2] === undefined ? data[1].image : data[currentId + 2].image} price = {data[currentId + 2] === undefined ? data[1].price : data[currentId + 2].price} paramId={`${data[currentId + 2] === undefined ? data[1].paramId : data[currentId + 2].paramId}`}/>
    </div>
  )
}
