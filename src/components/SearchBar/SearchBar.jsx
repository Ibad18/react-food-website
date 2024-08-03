import React from 'react'
import './SearchBar.css'
import search_img from '../../assets/search_img.png'
const SearchBar = () => {
    return (
        <div className='search-bar'>
            <img src={search_img} alt="" />
            <div className="search">
                <input type="text" placeholder='Search for food' />
                <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBar