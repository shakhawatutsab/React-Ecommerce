import React from 'react'
import SVG from './Header/SVG';
import MobileHeader from './Header/MobileHeader';
import MainHeader from './Header/MainHeader';

const Header = () => {
  return (
    <>
    <SVG />
    {/* Mobile Header */}
    <MobileHeader />
    {/* /.header-mobile */}

    {/* Main Header  */}
    < MainHeader />
    {/* End Main Header */}
    </>
  )
}

export default Header;
