import React from 'react'
import logo from '../../Images/Logo.png'
import '../../StyleSheet/DesktopNav.css'
import { Link } from 'react-router-dom'

const DesktopNavbar = () => {
  return (
    <div className='DesktopNav__container'>
        <div className='DesktopNavLeft__container'>
            <img src={logo} alt="Company Logo" className='logo'/>
        </div>

        <div className='DesktopNavRight__container'>
            <Link to = '/house-sale' style={{textDecoration: "none", color: "black"}}>
              <h3 className='link'>For Sale</h3>
            </Link>
            <h3>To Rent</h3>
            <Link 
              to='/List-your-property'
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <h3 className='DesktopNavRight_sell'>Sell Your Property</h3>
            </Link>
            <h3>Contact Us</h3>
        </div>
    </div>
  )
}

export default DesktopNavbar