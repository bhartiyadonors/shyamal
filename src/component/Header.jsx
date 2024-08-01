

import React from 'react'

import brand from '../assets/images/m-logo.png'


const Header = () => {
  return (
   <div>
    <header className='header'>
      <div>
        <img src={brand} alt="" />
      </div>
      <div className='navBar'>
      <ul>
        <li>
          Home
        </li>
        <li>
          About Us
        </li>
        <li>
          Services
        </li>
        <li>
          Profile
        </li>
        <li>
          Contact Us
        </li>
      </ul>
      </div>
    </header>
    </div>
  )
}

export default Header
