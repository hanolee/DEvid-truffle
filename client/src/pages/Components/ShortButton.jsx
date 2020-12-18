import React from 'react';
import {Link} from 'react-router-dom';

import './ShortButton.style.css';

function ShortButton(props){
    return(
        <div className="shortbtn">
                <Link to = {props.link}>{props.name}</Link>
        </div> 
    )
}

export default ShortButton;