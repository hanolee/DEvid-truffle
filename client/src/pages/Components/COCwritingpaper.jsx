import React from 'react';
import './COCwritingpaper.style.css';
import COCwritingpaper_personinfo from './COCwritingpaper_personinfo';
import SpecificInfo from './COCwritingpaper_specificInfo';
import Remarks from './COCwritingpaper_remarks';
import Header from './COCwritingpaper_header';


function COCwritingpaper(){
    return(
        <div className = "card">
            <Header/>
            <h2>[대여금 반환 청구]</h2>
            <COCwritingpaper_personinfo title = "발신인 정보"/>
            <COCwritingpaper_personinfo title = "수신인 정보"/>
            <SpecificInfo/>
            <Remarks/>
        </div>
    )
}


export default COCwritingpaper;