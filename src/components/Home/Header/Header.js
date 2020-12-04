import React from 'react';
import BuisnessInfo from '../BuisnessInfo/BuisnessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BuisnessInfo></BuisnessInfo>
        </div>
    );
};

export default Header;