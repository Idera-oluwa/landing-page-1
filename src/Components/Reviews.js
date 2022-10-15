import React,{useState} from 'react'
import './Reviews.css'
import {reviews} from '../data'
import {BsStarFill} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Reviews() {
    return (
        <div className='reviews-total-container'>
            <div className='reviews-container'>
       <h1 className='reviews-heading'>What Our Customers Say</h1>
       <div className='reviews-heading-underline'></div>
       <p className='reviews-paragraph'>Officia dolore fugiat cillum ex. 
           Proident dolore veniam sint laborum in officia in pariatur tempor mollit ad proident culpa.
            In anim enim tempor ea proident.</p>
            </div>
            <div className='reviews-body-total-container'>
            <Swiper
            className='swiper-container'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      breakpoints={{
        800: { slidesPerView: 2},
        1200:{slidesPerView: 3}
      }}
        visibilityFullFit= {true}
        autoResize= {false}
      scrollbar={{ draggable: true }}
    >
            {reviews.map((review)=>{
                const {id,name,image,word} = review;
                return(
                    <SwiperSlide>
                        <div>
        <div key={id} className='swiper'>
        <div className='reviews-image-container'>
        <img src={image} 
        alt={name}
         className='image'>
         </img>
         </div>
        <h3>{name} </h3>
        <p className='info'>Do non Lorem dolor irure sint consequat sint ullamco deserunt nisi sit. 
        Sint dolor cillum mollit pariatur. 
        Ipsum consequat nisi sunt dolore laboris id id enim id nostrud occaecat id reprehenderit laboris. 
        Ea minim proident ut in ea ullamco est reprehenderit in.</p>
        <h3 className='reviews-word'>{word}</h3>
        <div className='reviews-star'>
             { Array.from({length:5},(_,index)=>{
                            return(
                              <span key={index}>
                               <BsStarFill />
                              </span>
                            )
                        })
                    }
        </div>
        </div>
        </div>
       </SwiperSlide>
        
                )
        })}
                </Swiper>
        </div>
        </div>
    )
}

export default Reviews
