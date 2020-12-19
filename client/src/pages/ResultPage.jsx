import React from 'react';
import './styles/ResultPage.style.css'
import ShortButton from './Components/ShortButton';

function ResultPage(props) {
    
        return(
            <div className = "body">
                <div className = "body_left">
                    <div className = "sender">
                        <div><span>발신인</span></div>
                        <ol>
                            <li>오백만</li>
                            <li>서울시 서초구</li>
                            <li>010-1111-1111/500@naver.com</li>
                        </ol>
                    </div>
                    <div className="receiver">
                    <div><span>수신인</span></div>
                        <ol>
                            <li>김파렴</li>
                            <li>서울시 서초구</li>
                            <li>010-1111-1111/500@naver.com</li>
                        </ol>
                    </div>
                    <h3>제목 : 대여금 반환 청구(촉구)의 건</h3>
                    <div className = "content">
                        <ol>
                            <li>수신인 귀하의 건승을 기원합니다.</li>
                            <li>위 발신인은 E(날짜)에 위 수신인에게 금 C원을, 변제기 F(날짜), 이자 (월) G%로 대여하여 주었습니다.</li>
                            <li>그런데 귀하는 현재 위 금원 중 H원을 갚지 않고 있습니다.</li>
                            <li>수신인은 I까지 H원을 (은행계좌)로 입금하시길 바랍니다.</li>
                            <li>귀하께서 위 사항에 대한 이행을 하시지 않는 경우 민,형사상의 법적 조치를 취할 수 밖에 없음을 정중하게 통지하는 바입니다.</li>
                        </ol>
                    <h4>2020.12.19</h4>
                    <h4>발신인 오백만</h4>
                    </div>
                </div>   
                <div className="body_right">
                    <ShortButton name = "View"/>
                    
                    <ShortButton name = "Send"/>
                </div>

         </div> 
    )
}

export default ResultPage;
