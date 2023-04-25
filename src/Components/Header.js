import React, { useEffect, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useStateValue } from './StateProvider';
import {MenuItems}from '../../src/Components/Data'
function Header({ handleChange}) {
    const[{cart},dispatch] = useStateValue();
    

    useEffect(() => {
        const toggleIcon = document.querySelector('.toggleMenu');
        toggleIcon.addEventListener("click", () => {
          document.querySelector('.rightMenu').classList.toggle('active');
        });
      }, []);
  return (
    <header>
        <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt='' className='logo'/>
        <div className='inputBox'>
        <SearchRoundedIcon className="searchIcon"/>
        <input type='text' placeholder='Search' onChange={handleChange} />
        </div>

        <div className='shoppingCart'>
            <ShoppingCartRoundedIcon className="cart"></ShoppingCartRoundedIcon>
            <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
                <p>{cart ? cart.length : ""}</p>
            </div>
        </div>
        <div className='profileContainer'>
            <div className='imgBox'>
                <img src='https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937' alt='' className='profilePic'/>
            </div>
            <h2 className='userName'>Ayushi Gupta</h2>
        </div>
        <div className='toggleMenu'>
        <BarChartIcon className='toggleIcon'/>
        </div>
    </header>
  )
}

export default Header
