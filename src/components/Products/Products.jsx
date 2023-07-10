import React from 'react'
import './Products.css';
import Product from '../Product/Product';
import data from '../../constants/data';

export default function Products() {
  return (
    <div className="ghost__products">
        <Product name= {data[0].flavor} image={data[0].image} price={data[0].price} paramId={data[0].paramId} id={data[0].id}/>
        <Product name= {data[1].flavor} image={data[1].image} price={data[1].price} paramId={data[1].paramId} id={data[1].id}/>
        <Product name= {data[2].flavor} image={data[2].image} price={data[2].price} paramId={data[2].paramId} id={data[2].id}/>
        <Product name= {data[3].flavor} image={data[3].image} price={data[3].price} paramId={data[3].paramId} id={data[3].id}/>
        <Product name= {data[4].flavor} image={data[4].image} price={data[4].price} paramId={data[4].paramId} id={data[4].id}/>
        <Product name= {data[5].flavor} image={data[5].image} price={data[5].price} paramId={data[5].paramId} id={data[5].id}/>
        <Product name= {data[6].flavor} image={data[6].image} price={data[6].price} paramId={data[6].paramId} id={data[6].id}/>
        <Product name= {data[7].flavor} image={data[7].image} price={data[7].price} paramId={data[7].paramId} id={data[7].id}/>
        <Product name= {data[8].flavor} image={data[8].image} price={data[8].price} paramId={data[8].paramId} id={data[8].id}/>
        <Product name= {data[9].flavor} image={data[9].image} price={data[9].price} paramId={data[9].paramId} id={data[9].id}/>
    </div>
  )
}
