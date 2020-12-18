import React from 'react';
import './COCwritingpaper_personinfo.style.css';

function COCwritingpaper_personinfo(props) {
    return(
        <div className = "info">
            <h3>{props.title}</h3>
            <div>
                <span>이름</span>
                <input id = "nameinput"></input>
                <span>핸드폰</span>
                <input id = "phoneinput"></input>
                <span>이메일</span>
                <input id = "emailinput"></input>
            
            </div>
            <div>
                <span>주소</span>
                <input id = "addressinput"></input>
            </div>
        </div>
    )
}

export default COCwritingpaper_personinfo;

