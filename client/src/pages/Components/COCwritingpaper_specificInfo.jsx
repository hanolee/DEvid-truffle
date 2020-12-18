import React from 'react';
import './COCwritingpaper_specificInfo.style.css';
function SpecificInfo() {
    return(
        <div class = "detail">
            <div>
                <span>빌려준 금액</span>
                <input id = "id1"></input>
            </div>
            <div>
                <span>빌려준 날짜</span>
                <input id = "id2"></input>
            </div>
            <div>
                <span>청구 금액</span>
                <input id = "id3"></input>
            </div>
            <div>
                <span>최종 입금 기한</span>
                <input id = "id4"></input>
            </div>
            <div>
                <span>입금 요청 계좌</span>
                <input id = "id5"></input>
            </div>
            <div>
                <span>이율</span>
                <input id = "id6"></input>
            </div>
            <div>
                <span>받기로 한 날짜</span>
                <input id = "id7"></input>
            </div>
        </div>
    )
}

export default SpecificInfo