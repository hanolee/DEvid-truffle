import React from 'react';
import COCwriteHeader from './Components/COCwriteHeader';
import cardinfo from './Components/Info_Const/CardInformation';
import COCCardView from './Components/COCCardView';
import COCwritingpaper from './Components/COCwritingpaper';
import './styles/COCPage.style.css';

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
        </div>    
    </div>
    )
}

export default COCPage;
