import React from 'react'
import './Navbar.css'
import brand from '../../assets/brand.avif'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="brand">
                <img src={brand} alt="" />
                <h4>wowFood</h4>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Foods</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar