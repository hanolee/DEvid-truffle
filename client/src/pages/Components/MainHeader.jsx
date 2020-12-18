import React from 'react';
import './MainHeader.style.css';
import logo from '../../img/devid_logo_typo.png';

function Header(props){
    return (
        <div className = "header">
            <img
            src = {logo}
            width = "220"
            height = "110"
            />
        </div>
    );
}

export default Header;

