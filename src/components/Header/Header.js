import React from 'react';
import Banner from '../Banner/Banner';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <NavBar/>
            <Banner/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;