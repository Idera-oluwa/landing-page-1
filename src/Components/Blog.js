import React from 'react'
import {foods} from '../data'
import './Blog.css'

const blog =foods.filter((food)=> food.blog === true)
console.log(blog)
function Blog() {
    return (
        <div className='blog-total-container'>
            <h1 className='blog-header'>Our Latest Blog And News</h1>
            <div className='blog-header-underline'></div>
            <p className='blog-heading-para'>Ipsum esse duis proident nisi aliqua ea reprehenderit laborum in ut occaecat voluptate.
                Eiusmod ex quis commodo ad mollit pariatur proident culpa nostrud amet id.</p>
                <div className='blog-items-container'>
                    <div className='blog-main-item'>
                        <img src='images/roasted-pheasant.webp' alt='' className='blog-main-image'/>
                        <h3 className='blog-main-items-heading'>Cillum amet proident nisi qui enim laboris laborum cupidatat cillum reprehenderit.</h3>
                        <p className='blog-main-items-text'>Occaecat in id nisi duis laboris Lorem deserunt minim dolor.
                            Aliquip nostrud tempor nostrud consectetur velit.
                            Velit sint labore est consectetur deserunt.</p>
                            <div className='blog-items-btn'>
                            <button className='blog-btn'>read more</button>
                            <button className='blog-btn'>Visit blog</button>
                            </div>
                    </div>
                    <div className='blog-sub-items-container'>
                        {blog.map((items)=>{
                        return(
                            <div className='blog-sub-items'>
                                <img src={items.img} alt='' className='blog-sub-image'/>
                                <div>
                                <h3 className='blog-sub-items-heading'>Occaecat in id nisi duis laboris Loremeret es deser minim dolor.</h3>
                                <div className='blog-items-btn'>
                            <button className='blog-btn'>read more</button>
                            <button className='blog-btn'>Visit blog</button>
                            </div>
                            </div>
                            </div>
                        )
                        })}
                    </div>
                </div>
        </div>
    )
}

export default Blog
