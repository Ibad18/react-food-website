import React from 'react'
import './Footer.css'
import facebookIcon from '../../assets/facebook-icon.png'
import instagramIcon from '../../assets/instagram-icon.png'
import twitterIcon from '../../assets/twitter-icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="icons">
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={twitterIcon} alt="" />
            </div>
        </div>
    )
}

export default Footer