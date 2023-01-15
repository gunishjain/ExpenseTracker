import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-logo'>
                ExpenseTracker 
                <i class="fi fi-br-wallet"></i>
            </div>
        </div>    
    </div>
  )
}

export default Header