import React from 'react';
import '../styles/Navbar.css'

export default function Navbar() {
  return (
      <nav>
        <div className='logo'>
            <img src="/img/adidas.png" alt="navlogo" />
        </div>
        <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        </ul>
        <div>
        <button className='mx-5'>Login</button>
        <button className='mx-5'>Signup</button>
        </div>
      </nav>
  )
}
