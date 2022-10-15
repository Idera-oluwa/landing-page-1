import React from 'react';
import {chefs} from '../data'
import './Chefs.css';
const Chefs=()=>{
    return(
   <div className='chefs-total-container'>
       <h1 className='chef-heading'>Our Special Chefs</h1>
       <div className='chef-heading-underline'></div>
       <p className='chef-text'>Id excepteur in et fugiat ipsum commodo non nostrud dolore.
            Nostrud nisi occaecat consequat anim laboris mollit.
            Consequat labore magna Lorem nostrud. </p>
            <div className='chefs-data-container'>
                {chefs.map((chef)=>{
                    const {id,img,name,title}=chef;
                    return(
                        <div key={id} className='chefs-data'>
                            <img src={img} className='chefs-image'/>
                            <div className='chefs-name-title'>
                                <h3 className='chef-name'>{name}</h3>
                                <p className='chef-title'>{title}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
   </div>
    )
}
export default Chefs;