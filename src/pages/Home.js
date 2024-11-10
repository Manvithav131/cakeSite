import React from 'react';
import image from './images/img8.jpg'
import {Link} from "react-router-dom";
import "./pages.css"

function Home() {
  return (
     <div>
      <div className='Home-page'>
      <div><img className="circle"  src={image} alt="image"/></div>
      <div className='text'>
        <div className='logo'>
          <h1>BAKE HOUSE</h1>
        </div>
        <p className='paragraph'> Welcome to BAKE HOUSE, where passion meets perfection in every cake we bake! We believe that every celebration deserves a delicious, beautiful centerpiece, and we’re here to bring that to life. From classic chocolate and vanilla to unique, custom flavors, we use only the finest ingredients to craft cakes that are not only a treat for the taste buds but also a feast for the eyes. Whether you're celebrating a birthday, wedding, anniversary, or any special occasion, our talented team can design and create a cake as unique as your event. With a range of styles and designs, from elegant and timeless to fun and whimsical, we’re dedicated to making your cake vision come true. Take a look around, and let us help make your next celebration unforgettable with a cake that's baked to perfection!</p>
        <div className='button'>
          <Link to = "/ExploreCake" className='white'>
            EXPLORE CAKE
          </Link>
        </div>
      </div>

      </div>
      </div>
    
  

  )
}

export default Home;