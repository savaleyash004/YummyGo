import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Explore a variety of delicious dishes made with top-quality ingredients, and enjoy a meal that will make your dining experience special.</p>
        <a href="#explore-menu"><button>View Menu</button></a>
      </div>
    </div>
  )
}

export default Header
