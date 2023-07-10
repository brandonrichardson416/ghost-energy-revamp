import React, {useContext, useState} from 'react';
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import data from '../../constants/data';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Accordion } from '../../components';
import { More } from '../../containers';
import { ShopContext } from '../../context/ShopContext';
import {Gallery} from '../../components';


export default function ProductDetails() {



const accordionInfo = {
  title: 'Nutrition Facts',
  content: <tbody><tr>
    <td valign="top"><b>Total Fat</b></td>
    <td align="right"><b>0g</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Cholesterol</b></td>
    <td align="right"><b>0mg</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Total Carbohydrate</b></td>
    <td align="right"><b>1g</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Protein</b></td>
    <td align="right"><b>0g</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Total Sugars</b></td>
    <td align="right"><b>0g</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Includes 0g Added Sugars</b></td>
    <td align="right"><b>0</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Sodium</b></td>
    <td align="right"><b>35mg</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Vitamin C</b></td>
    <td align="right"><b>90mg</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Niacin</b></td>
    <td align="right"><b>2.4mcg</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Vitamin B6</b></td>
    <td align="right"><b>1.7mcg</b></td>
    </tr>
    <tr>
    <td valign="top"><b>Vitamin B12</b></td>
    <td align="right"><b>2.4mcg</b></td>
    </tr>
    </tbody>
}
const { paramId } = useParams()
const currProduct = data.find(prodData => prodData.paramId === paramId)
const currId = currProduct.id;
const {addToCart, cartItems, removeFromCart, updateQuantity, addAmount} = useContext(ShopContext);
const cartItemAmount = cartItems[currId];


const [amount, setAmount] = useState(0);

function incAmount(){
  setAmount((prev) => prev + 1)
}

function decAmount(){
  amount <= 0 ? setAmount(0) : setAmount((prev) => prev - 1)
}




  return (
    <div className="ProductDetails">
        <div className="ghost__product_details-grid">
            
            <div className="ghost__product_details-media">
            <Gallery flavor={currProduct.flavor}img1={currProduct.image} img2={currProduct.gallery1} img3={currProduct.gallery2} img4={currProduct.gallery3}/>
            </div>
            <div className="ghost__product_details-content">
                <h1 className="ghost__product_details-title">{currProduct.flavor}</h1>
                <h2 className="ghost__product_details-pack">12-Pack</h2>
                <p className="ghost__product_details-desc">Ghost® Energy contains 1000 mg of Acetyl-L-Carnitine, 200 mg natural caffeine, 100 mg of Neurofactor™ and 100% of seven daily B vitamins per 16 oz can. Grab a case of your favorite flavor for epic focus, and legendary energy that is low in calories and contains zero artificial colors.</p>
               <div className="ghost__product_details-options">
                <div className="ghost__product_details-quantity">
                  <FaMinus style={{cursor: 'pointer'}} onClick={()=> decAmount()}/>
                  <input value={amount} onChange={(e)=>updateQuantity(currId, Number(e.target.value))}/>
                  <FaPlus style={{cursor: 'pointer'}} onClick={() => incAmount()}/>
                </div>


                <button className="ghost__product_details-atc" onClick={() => addAmount(currId, amount)}>
                  <span>Add <span class="ghost__product_tocart">To Cart</span> {cartItemAmount > 0 && <>({cartItemAmount})</>}</span>
                  <span>${currProduct.price}</span>
                </button>

            
                </div>
                <Accordion title={accordionInfo.title} content={accordionInfo.content}/>
            </div>
        </div>
        <More currId={currId}/>
    </div>
  )
}
