import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './COCwritingpaper.style.css';
import { Link } from 'react-router-dom';            

import COCwriteHeader from './COCwritingpaper_header';


function COCwritingpaper(){
    const { register, handleSubmit } = useForm();

    const [isOnSubmitted, setIsOnSubmitted] = useState(false);
    const [object] = useState({});

    const onSubmit = data => {
        console.log(data);
        
    }
    

    const placeHolder = "법률상 불리할 수 있는 내용이 들어가지 않도록 신중하게 기입하셔야 합니다. 검토가 필요한 경우 법률 전문가의 자문을 받으세요.";
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className = "card">

            <COCwriteHeader/>
            <h2>[대여금 반환 청구]</h2>
            
           
                <div className = "info">
                    <h3>발신인 정보</h3>
                <div>
                    <span>이름</span>
                    <input ref={register} name="sender_name" className = "nameinput" ></input>
                    <span>핸드폰</span>
                    <input ref={register} name="sender_phoneNumber"  className = "phoneinput" ></input>
                    <span>이메일</span>
                    <input ref={register} name="sender_email" className = "emailinput"></input>
            
                </div>
                <div>
                    <span>주소</span>
                    <input ref={register} name="sender_address" className = "addressinput" ></input>
                </div>
                
        </div>
        <div className = "info">
            <h3>수신인 정보</h3>
                <div>
                    <span>이름</span>
                    <input ref={register} name="receiver_name" className = "nameinput" ></input>
                    <span>핸드폰</span>
                    <input ref={register} name="receiver_phoneNumber" className = "phoneinput" ></input>
                    <span>이메일</span>
                    <input ref={register} name="receiver_email" className = "emailinput" ></input>
                
                </div>
                <div>
                    <span>주소</span>
                    <input ref={register} name="receiver_address" className = "addressinput" ></input>
                </div>
            </div>
            

            <div class = "detail">
            <div>
                <span>빌려준 금액</span>
                <input ref={register} name="borrowingMoney" id = "id1" ></input>
            </div>
            <div>
                <span>빌려준 날짜</span>
                <input ref={register} name="borrowingDate" id = "id2" ></input>
            </div>
            <div>
                <span>청구 금액</span>
                <input ref={register} name="askingMoney" id = "id3" ></input>
            </div>
            <div>
                <span>최종 입금 기한</span>
                <input ref={register} name="FinalDueDate" id = "id4" ></input>
            </div>
            <div>
                <span>입금 요청 계좌</span>
                <input ref={register} name="balanceAccountOfSender" id = "id5"></input>
            </div>
            <div>
                <span>이율</span>
                <input ref={register} name="feePercent" id = "id6"></input>
            </div>
            <div>
                <span>받기로 한 날짜</span>
                <input ref={register} name="originDueDate" id = "id7"></input>
            </div>
        </div>

        <div>
            <h3>기타 전하여야 할 내용</h3>
            <input placeholder={placeHolder} ref={register} name="remarks"></input>

            <button type="submit">보내기버튼</button>
        </div>


    </div>
    </form>
    )
}


export default COCwritingpaper;