import React from 'react'
import './Hero.css'
import {MdFavorite} from 'react-icons/md';

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero-infos'>
      <h1 className='hero-heading'>Lets start <span className='hero-heading-span'>instand food</span>, for instant hunger</h1>
            <p className='hero-paragraph'>Lorem ullamco cillum excepteur consequat magna aliqua ad dolore. 
            Ipsum dolor tempor incididunt ex esse ad laboris est incididunt ut ullamco est.
             Ad ad eiusmod elit ex culpa magna labore.</p>
            <div className='hero-buttons'>
                <button className='hero-btn special'>SHOP NOW</button>
                <button className='hero-btn'>LOG IN</button>
            </div>
            </div>
            <div className='hero-image-container'>
            <div className='hero-image-div'>
            <div className='hero-image-info-container'>
            <div>
                {/*<div className='hero-image-info'>
                    <MdFavorite/>
                <h3>Best</h3>
                <p>Ipsum aliquip aliqua sint ea esse laboris incididunt in consectetur</p>
             </div>*/}
            </div>
            </div>
            <img src='images/pngegg.png' className='hero-image'/>
            </div>
            </div>
        </div>
    )
}

export default Hero;