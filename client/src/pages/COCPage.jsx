import React from 'react';
import COCwriteHeader from './Components/COCwriteHeader';
import cardinfo from './Components/Info_Const/CardInformation';
import COCCardView from './Components/COCCardView';
function COCPage() {
    return (

    <div className = "COCWritePage">
        <div className = "selectView">
            <COCwriteHeader/>
            <COCCardView  content={cardinfo}/>
        </div>
        <div className = "writeView">

        </div>    
    </div>
    )
}

export default COCPage;
