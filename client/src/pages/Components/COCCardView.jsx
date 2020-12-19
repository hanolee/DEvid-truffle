import React from 'react';
import './COCCardView.style.css';

function COCCardView(props){
    return(
        <div className = "cardWrapper">
            <div>
                <header>
                    <h1>대여금 반환 청구(빌려준 돈 받기)</h1>
                </header>
            <article id = "up">
                <div className = "contents">
                    <p>빌려준 돈을 갚지 않는 상대방에게 DEvid의 디지털 내용증명을 보내보세요</p>
                    <p>DEvid를 통해 발신한 디지털 내용증명은 Blockchain에 담겨 영구적으로 열람이가능하며</p>
                    <p>언제든 강력한 증거로 활용될 수 있습니다.</p>
                </div>
                <div className = "imgsection">
                    <img src = "../../img/ImageCard1.png"/>
                    
                </div>
            </article>

            </div>

            <div>
            <article id = "down">
                <header>
            <h2>{props.content.subtitle}</h2>
                </header>
            <div className = "shoulddolist">
                <ul>
                    <h3>이거 리액트 문법 써서 자동으로 기입</h3>
                </ul>
            </div>    
            </article>
            </div>
        </div>
    )
}


export default COCCardView;