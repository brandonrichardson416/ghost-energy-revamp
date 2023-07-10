import React, {useContext} from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function CartItem({data}) {

  const {cartItems, addToCart, removeFromCart, updateQuantity} = useContext(ShopContext);
  return (
    <div className="ghost__cart-item">
        <div className="ghost__cart-item_img">
            <img src={data.image}/>
        </div>
        <div className="ghost__cart-item_info">
            <div className="ghost__cart-item_info_nameprice">
                <h3 className="ghost__cart-item_info_name">
                    {data.flavor}
                </h3>
                <p className="ghost__cart-item_info_pack">12 Pack</p>
                <p className="ghost__cart-item_info_price">${data.price}</p>
            </div>

            <div className="ghost__cart-item_quantity">
                <FaMinus style={{cursor: "pointer"}}onClick={()=> removeFromCart(data.id)}/>
                <input value={cartItems[data.id]} onChange={(e)=>updateQuantity(data.id, Number(e.target.value))}/>
                <FaPlus style={{cursor: "pointer"}} onClick={()=> addToCart(data.id)}/>
            </div>
        </div>
    </div>
  )
}
