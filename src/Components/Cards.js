import React from 'react'
import './Cards.css'
import {FaUserPlus,FaShoppingCart,FaFirstOrder} from 'react-icons/fa'
import {RiBikeFill} from 'react-icons/ri'

function Cards() {
    return (
        <div className='cards-total-container'>
            <h1 className='cards-header'>How Does It Work?</h1>
            <div className='cards-header-underline'></div>
            <p className='cards-header-text'>Eiusmod eu velit adipisicing commodo amet in commodo eu.
                 Commodo id voluptate mollit nisi duis. 
                 Ad dolor fugiat Lorem dolore in.</p>
                 <div className='cards-item-container'>
                     <div className='card-item-container'>
                     <div className='card-icon red'> <FaUserPlus /> </div>
                         <div className='card-headint-text'>
                             <h3 className='card-heading'>Login</h3>
                             <p className='card-text'>Ullamco exercitation occaecat cillum velit in voluptate duis officia.</p>
                         </div>
                     </div>
                     <div className='card-item-container'>
                     <div className='card-icon blue'> <FaShoppingCart/></div>
                         <div className='card-headint-text'>
                             <h3 className='card-heading'>Shop</h3>
                             <p className='card-text'>Ullamco exercitation occaecat cillum velit in voluptate duis officia.</p>
                         </div>
                     </div>
                     <div className='card-item-container'>
                         <div className='card-icon red'> <FaFirstOrder/> </div>
                         <div className='card-headint-text'>
                             <h3 className='card-heading'>Order</h3>
                             <p className='card-text'>Ullamco exercitation occaecat cillum velit in voluptate duis officia.</p>
                         </div>
                     </div>
                     <div className='card-item-container'>
                     <div className='card-icon yellow'> <RiBikeFill/> </div>
                         <div className='card-headint-text'>
                             <h3 className='card-heading'>Deliver</h3>
                             <p className='card-text'>Ullamco exercitation occaecat cillum velit in voluptate duis officia.</p>
                         </div>
                     </div>
                 </div>
        </div>
    )
}

export default Cards;
