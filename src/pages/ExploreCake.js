import React, { useState } from 'react';
import './ExploreCake.css'; 
import img1 from './images/chocolatecake.jpg'
import img2 from './images/vanillacake.jpg'
import img3 from './images/strawberrycake.jpg'
import img4 from './images/RedVelvetCake.jpg'
import img5 from './images/LemonCake.jpg'
import img6 from './images/Blackforest.jpg'
import img7 from './images/carroteCake.jpg'
import img8 from './images/marblecake.jpg'
const cakes = [
  { id: 1, name: 'Chocolate Cake', price: 15, image: img1 },
  { id: 2, name: 'Vanilla Cake', price: 12, image: img2 },
  { id: 3, name: 'Strawberry Cake', price: 18, image:  img3},
  { id: 4, name: 'Red Velvet Cake', price: 20, image: img4 },
  { id: 5, name: 'Lemon Drizzle Cake', price: 16, image: img5 },
  { id: 6, name: 'Black Forest Cake', price: 25, image: img6 },
  { id: 7, name: 'Carrot Cake', price: 14, image: img7 },
  { id: 8, name: 'Marble Cake', price: 17, image: img8 },
];

const CakeOrderPage = () => {
  const [cart, setCart] = useState(cakes.map(cake => ({ ...cake, quantity: 0 })));

  const handleIncrease = (id) => {
    setCart(cart.map(cake => 
      cake.id === id ? { ...cake, quantity: cake.quantity + 1 } : cake
    ));
  };

  const handleDecrease = (id) => {
    setCart(cart.map(cake => 
      cake.id === id && cake.quantity > 0 ? { ...cake, quantity: cake.quantity - 1 } : cake
    ));
  };

  return (
    <div className='wrap'>
    <div className="cake-order-container">
      <h2 className="page-title">Order Your Cake</h2>
      <div className="cake-list">
        {cart.map((cake) => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} className="cake-image" />
            <h3>{cake.name}</h3>
            <p>Price: ${cake.price}</p>
            <div className="quantity-control">
              <button onClick={() => handleDecrease(cake.id)}>-</button>
              <span>{cake.quantity}</span>
              <button onClick={() => handleIncrease(cake.id)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CakeOrderPage;


