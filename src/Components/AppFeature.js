import React from 'react'
import './AppFeature.css'
import {FaGooglePlay,FaApple} from 'react-icons/fa'

const AppFeature=()=>{
return(
    <div className='app-feature-container'>
        <img src='images/phone-2.jpg' alt='' className='feature-image'/>
        <div className='feature-info-container'>
            <h1>Get More Features With Our Mobile Application</h1>
            <p className='feature-para'>Veniam laboris adipisicing ea officia minim consequat nostrud consectetur eiusmod ad anim aute mollit. 
                Quis magna pariatur enim ex dolor aliquip dolor non et sint ut occaecat pariatur anim. 
                Voluptate commodo et quis minim ex veniam consectetur sint aliqua culpa.</p>
                <div>
                    <h3 className='feature-list-items'><button className='feature-button'></button>Fast Delivery</h3>
                    <h3 className='feature-list-items'><button className='feature-button'></button>More Delicious Meals</h3>
                    <h3 className='feature-list-items'><button className='feature-button'></button>Regular Discounts</h3>
                </div>
                <div className='feature-download-section'>
                    <div className='feature-download-item'>
                       <FaGooglePlay className='google-play'/>
                       <div>
                           <p className='feature-download'>Download on</p>
                           <h3 className='feature-store'>Google Play</h3>
                           </div> 
                    </div>
                    <div className='feature-download-item'>
                       <FaApple className='apple-store'/>
                       <div>
                           <p className='feature-download'>Download on</p>
                           <h3 className='feature-store'>Apple Store</h3>
                           </div> 
                    </div>
                    </div>
        </div>
    </div>
)
}
export default AppFeature;