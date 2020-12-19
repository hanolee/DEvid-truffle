import React from 'react';
import COCwriteHeader from './Components/COCwriteHeader';
import cardinfo from './Components/Info_Const/CardInformation';
import COCCardView from './Components/COCCardView';
import COCwritingpaper from './Components/COCwritingpaper';
import './styles/COCPage.style.css';
import ShortButton from './Components/ShortButton';

function COCPage() {
    return (

    <div className = "COCWritePage">
        <div className = "selectView">
            <COCwriteHeader/>
            <div className = "cardBackground">
            <COCCardView  content={cardinfo}/>
            </div>
        </div>
        <div className = "writeView">
            <COCwritingpaper/>
            <ShortButton link = './result' name = "다음"/>
            
        </div>    
    </div>
    )
}

export default COCPage;
