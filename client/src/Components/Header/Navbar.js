import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import { 
    BrowserView, 
    MobileView, 
    isBrowser, 
    isMobile 
} from 'react-device-detect';
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <div>
        <BrowserView>
            <DesktopNavbar />
        </BrowserView>
        <MobileView>
            <MobileNav />
        </MobileView>
    </div>
  )
}

export default Navbar