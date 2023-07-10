import React, {useContext} from 'react'
import './Product.css';
import {FaMinus, FaPlus} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import data from '../../constants/data';

export default function Product({id, name, image, price, paramId}) {
  const {addToCart, cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id]
  return (
    <div className="ghost__product">
      <div className="ghost__product_image">
          <Link to={`/products/${paramId}`}>
          <img src={image}/>
          </Link>
      </div>
      <Link to={`/products/${paramId}`} style={{color: 'black', textDecoration: 'none'}}>
      <div className="ghost__product_name"> 
          <h2>{name}</h2>
      </div>
      </Link>
      <div className="ghost__product_pack">
          <h3>12-Pack</h3>
      </div>
                <button className="ghost__product_atc" onClick={() => addToCart(id)}>
                  <span>Add <span class="ghost__product_tocart">To Cart</span> {cartItemAmount > 0 && <>({cartItemAmount})</>}</span>
                  <span>{price}</span>
                </button>
    </div>
  )
}
