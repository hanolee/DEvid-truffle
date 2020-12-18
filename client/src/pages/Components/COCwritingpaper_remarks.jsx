import React from 'react';
import './COCwritingpaper_remarks.style.css';

function Remarks(){
    const placeHolder = "법률상 불리할 수 있는 내용이 들어가지 않도록 신중하게 기입하셔야 합니다. 검토가 필요한 경우 법률 전문가의 자문을 받으세요.";
    return(
        
        <div>
            <h3>기타 전하여야 할 내용</h3>
            <input placeholder={placeHolder}></input>
        </div>
    );
}

export default Remarks;