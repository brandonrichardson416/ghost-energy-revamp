import React, {useContext} from 'react';
import './Cart.css'
import { ShopContext } from '../../context/ShopContext';
import data from '../../constants/data';
import { CartItem } from '../../components';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const {cartItems,cartAmount} = useContext(ShopContext);
    const getTotal = cartAmount();
    const navigate = useNavigate();
  return (
    <div className="ghost__cart">
        <h1 className="ghost__cart-heading">
            My Cart
        </h1>

        <div className="ghost__cart_cart-items">
            {data.map((product) => {
                if(cartItems[product.id] !== 0){
                    return <CartItem data={product}/>;
                }
            })}
        </div>


        <div className="ghost__cart_checkout">
        {getTotal == 0 ? <p className="ghost__cart_cart-text">Your cart is empty</p>:
            <h4>Total: ${getTotal.toFixed(2)}</h4>}
            <button className="ghost__cart_checkout-btn">
                Checkout
            </button>
            <button onClick={()=> navigate('/products')}>
                Continue Shopping
            </button>
        </div> 
    </div>
  )
}
