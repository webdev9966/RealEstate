import React from 'react'
import logo from '../../Images/Logo.png'
import '../../StyleSheet/MobileNav.css'

function MobileNav() {
  return (
    <div className='MobileNav_container'>
        <img src={logo} alt="Company Logo" />
    </div>
  )
}

export default MobileNav