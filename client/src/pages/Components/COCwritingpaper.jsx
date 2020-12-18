import React from 'react';
import './COCwritingpaper.style.css';
import COCwritingpaper_personinfo from './COCwritingpaper_personinfo';

function COCwritingpaper(){
    return(
        <div className = "card">
            <COCwritingpaper_personinfo title = "발신인 정보"/>
            <COCwritingpaper_personinfo title = "수신인 정보"/>
        </div>
    )
}


export default COCwritingpaper;