import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

import Logo from '../assets/NM_logo_dark.png'
import './Header.css'

export default () => {
  return (
    <div className='header-container'>
      <FontAwesomeIcon
        className='header-icon'
        icon={faUser}
        color='white'
        size='lg'
      />
      <img className='header-logo' src={Logo} alt={Logo} />
      <FontAwesomeIcon
        className='header-icon'
        icon={faSearch}
        color='white'
        size='lg'
      />
    </div>
  )
}
