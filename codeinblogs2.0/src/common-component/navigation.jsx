import React from 'react'
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <img src="logo.png" alt="" />
        </div>
        <div className="nav-elements">
            <span>Home</span>
            <span>Blogs</span>
            <span>Events</span>
            <span>About Us</span>
            <span>Resources</span>
            <span>Products</span>
        </div>

        <div className="btn">
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navigation