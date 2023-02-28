import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Reanne Eredera</h1>
        <h5 className="text-light">Computer Science Student</h5>
        <CTA />
    
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
