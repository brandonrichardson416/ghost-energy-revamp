import React, {useContext} from 'react'
import './FeaturedProduct.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';


export default function FeaturedProduct({id, name, image, price, paramId}) {

  const {addToCart, cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  return (
    <div className="ghost__featured-product">
      <Link to={`/products/${paramId}`}>
      <div className="ghost__featured-product_image">
          <img src={image}/>
      </div>
      </Link>
      <Link to={`/products/${paramId}`} style={{color:'black', textDecoration: 'none'}}>
      <div className="ghost__featured-product_name"> 
          <h2>{name}</h2>
      </div>
      <div className="ghost__featured-product_pack">
          <h3>12-Pack</h3>
      </div>
      </Link>

                <button className="ghost__featured-product_atc" onClick={() => addToCart(id)}>
                  <span>Add <span class="ghost__featured-product_tocart">To Cart</span> {cartItemAmount > 0 && <>({cartItemAmount})</>}</span>
                  <span>{price}</span>
                </button>
    </div>
  )
}
