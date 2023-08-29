import React from 'react'
import {FaSearch} from 'react-icons/fa';
import './Search.scss'

function Search() {
  return (
    <div className='header__search'>
    <div className='search'>
        <span className='search__icon'>
            <FaSearch />
        </span>
        <input type="text" className='search__input' placeholder='search' />
    </div>
</div>

  )
}

export default Search