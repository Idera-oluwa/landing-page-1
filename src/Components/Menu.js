import React,{useState} from 'react'
import './Menu.css';
import {foods} from '../data';
import {BsStarFill,BsStarHalf,BsStar,BsBorderAll} from 'react-icons/bs'

function Menu() {
    const [menuItems, setMenuItems] = useState(foods);
    const [foodCategory, setFoodCategory] = useState('all');
    const filterItems=(items)=>{
       setMenuItems(foods.filter((food)=>food.category === items))
        setFoodCategory(items)
    }
    const resetItems=()=>{
        setMenuItems(foods);
        setFoodCategory('all')
    }
    return (
        <div className='menu-container'>
            <h1 className='menu-heading'>Special Menu For You</h1>
            <div className='menu-heading-underline'></div>
            <p className='menu-text'>Id ea reprehenderit excepteur adipisicing aliqua est esse ex enim deserunt nulla magna do. Voluptate occaecat incididunt ullamco labore aliqua Lorem ipsum laboris minim tempor culpa. Id ut in commodo ipsum. Consequat officia laboris irure laboris elit exercitation exercitation.</p>
       <div className='category-buttons-container'>
           <button className={foodCategory === 'all' ? 'active category-button' : 'category-button'}
           onClick={resetItems}
           >
           <img src="https://cdn.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg" className='category-icon'/> All</button>
           <button className={foodCategory === 'pizza' ? 'active category-button' : 'category-button'}
        onClick={()=>filterItems('pizza')}
     >
           <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" className='category-icon'/> Pizza</button>
           <button className={foodCategory === 'chicken' ? 'active category-button' : 'category-button'}
            onClick={()=>filterItems('chicken')}
           >
           <img src="https://www.spendwithpennies.com/wp-content/uploads/2022/04/1200-Air-Fryer-Whole-Chicken-SpendWithPennies-.jpg" className='category-icon'/> Chicken</button>
           <button className={foodCategory === 'pie' ? 'active category-button' : 'category-button'}
            onClick={()=>filterItems('pie')}
           >
           <img src="https://www.shugarysweets.com/wp-content/uploads/2020/09/cherry-pie-9.jpg" className='category-icon'/> Pie</button>
           <button className={foodCategory === 'others' ? 'active category-button' : 'category-button'}
            onClick={()=>filterItems('others')}
           >
           <img src="https://media.cntraveler.com/photos/586eb8449d2b725a71af8123/master/pass/hot-dogs-gene-and-judes-photo-credit-Nick-Holmes.jpg" className='category-icon'/> Others</button>
       </div>
        <div className='menuitems-container'>
            {menuItems.map((item)=>{
            const {id,name,description,price,img,stars} = item;
            return(
                <div key={id} className='menuitem'>
                    <img src={img} className='menuitem-image'/>
                    <h3 className='menuitem-name'>{name}</h3>
                    <p className='menuitem-desc'>{description}</p>
                    <div className='price-star-button'>
                        <div>
                            <h3 className='menuitem-price'>${price}</h3>
                            <div className='stars'>
                    { Array.from({length:5},(_,index)=>{
                            const num1=index + 0.5;
                            const num2=index + 1
                            return(
                              <span className='tempstars' key={index}>
                               {stars >= num2 ? (<BsStarFill/>): stars >num1 ? (<BsStarHalf/>) : (<BsStar/>)}
                              </span>
                            )
                        })
                    }
                    </div>
                    </div>
                    <button className='menuitems-buy-button'>BUY NOW</button>
                    </div>
                </div>
            )
            })}
        </div>
        </div>
    )
}

export default Menu
