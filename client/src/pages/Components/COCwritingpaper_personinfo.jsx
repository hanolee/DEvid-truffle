import React from 'react';
import './COCwritingpaper_personinfo.style.css';

function COCwritingpaper_personinfo() {
    
    // const info_Sender = {
    //     name : this.input.value,
    //     phoneNumber : this.num_in.value,
    //     email : this.email_in.value,
    //     address : this.email_in.ref
    // }


    return(
        <div>
        <div className = "info">
            <h3>발신인 정보</h3>
            <div>
                <span>이름</span>
                <input className = "nameinput" ></input>
                <span>핸드폰</span>
                <input className = "phoneinput" ></input>
                <span>이메일</span>
                <input className = "emailinput"></input>
            
            </div>
            <div>
                <span>주소</span>
                <input className = "addressinput" ></input>
            </div>
            
        </div>
        <div className = "info">
            <h3>수신인 정보</h3>
                <div>
                    <span>이름</span>
                    <input className = "nameinput" ></input>
                    <span>핸드폰</span>
                    <input className = "phoneinput" ></input>
                    <span>이메일</span>
                    <input className = "emailinput" ></input>
                
                </div>
                <div>
                    <span>주소</span>
                    <input className = "addressinput" ></input>
                </div>
            </div>
            </div>
    )
}

export default COCwritingpaper_personinfo;

