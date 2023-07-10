import React, {useState, useEffect} from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import {RiCloseLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

export function Menu(){
    return (
        <>
    <div className="ghost__navbar-links_link">
            <Link className="ghost__navbar-links_page" to="/products">Flavors</Link>
        </div>
        <div className="ghost__navbar-links_link">
            <Link className="ghost__navbar-links_page" to="/stores">Stores</Link>
        </div>
        </>
)
}

export default function Navbar() {

const [toggleMenu, setToggleMenu] = useState(false);
const [fix, setFix] = useState(false);

useEffect(()=>{
   const setFixed = () =>{
    if(window.scrollY >= 390){
        setFix(true)
    } else {
        setFix(false)
    }
};

    window.addEventListener("scroll", setFixed)
},)

  return (
    <div className={fix ? 'ghost__navbar fixed' : 'ghost__navbar'}>
        <div className="ghost__navbar-links">
        <div className="ghost__navbar-links_logo">
            <Link to="/">
                    <img src={images.logo}/>
            </Link>
        </div>
        <div className="ghost__navbar-links_container">
        <Menu/>
        <div className="ghost__navbar-links_cart">
        <Link to="/cart">
                <FaShoppingCart size={20} color={"white"}/>
            </Link>
        </div>
        </div>
        </div>
        <div className="ghost__navbar-menu">
        {toggleMenu ? <RiCloseLine color={"white"} size={20} onClick={()=> setToggleMenu(false)}/> :
                    <FaBars color={"white"} size={20} onClick={()=> setToggleMenu(true)}/>}
        {toggleMenu && (
            <div className="ghost__navbar-menu_container">
                <div className="ghost__navbar-menu_container-links">


            <div className="ghost__navbar-menu_link" onClick={()=> setToggleMenu(false)}>
                <Link className="ghost__navbar-links_page" to="/products">Flavors</Link>
            </div>
            <div className="ghost__navbar-menu_link" onClick={()=> setToggleMenu(false)}>
                <Link className="ghost__navbar-links_page" to="/stores">Stores</Link>
            </div>
        </div>
        </div>
        )}
        <div className="ghost__navbar-menu_cart">
        <Link to="/cart">
                <FaShoppingCart size={20} color={"white"}/>
            </Link>
            </div>
        </div>
    </div>
  )
}
