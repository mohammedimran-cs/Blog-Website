import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.css'

const Header = () => {

  return (
    <nav>
        <h1>Simple Blog Website</h1>
        <div className='search'>
            <input type='text' placeholder='Search' />
            <div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </div>
    </nav>
  )
}

export default Header