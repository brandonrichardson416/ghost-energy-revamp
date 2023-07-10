import React, {useState, createContext} from 'react';
import data from '../constants/data';
export const ShopContext = createContext({});


function resetCart(){
  let cart = {};
  for(let i = 1; i < data.length + 1; i++){
    cart[i] = 0;
  }
  return cart;
};

export function ShopContextProvider({children}) {

  const [cartItems, setCartItems] = useState(resetCart());

  function addToCart(productId){
    setCartItems((prev) => ({...prev, [productId]: prev[productId] + 1}))
  }

  function removeFromCart(productId){
    setCartItems((prev) => ({...prev, [productId]: prev[productId] - 1}))
  }

  function updateQuantity(productId, newQuantity){
    setCartItems((prev) => ({...prev, [productId]: newQuantity}))
  }

  function addAmount(productId, amount){
    setCartItems((prev) => ({...prev, [productId]: prev[productId] + amount}))
  }

  function cartAmount(){
    let total = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = data.find((product) => product.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    return total;
  }

  const contextValues = {cartItems, addToCart, removeFromCart, cartAmount, updateQuantity, addAmount}  
  console.log(cartItems);
  return (<ShopContext.Provider value={contextValues}>{children}</ShopContext.Provider>);

}
