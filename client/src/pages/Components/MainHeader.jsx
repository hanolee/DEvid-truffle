import React from 'react';
import './MainHeader.style.css';
import logo from '../../img/devid_logo_typo.png';

function Header(props){
    return (
        <div className = "header">
            <img
            src = {logo}
            width = "200"
            height = "100"
            />
        </div>
    );
}

export default Header;

