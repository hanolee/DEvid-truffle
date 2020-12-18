import React from 'react';
import './COCCardView.style.css';

function COCCardView(props){
    return(
        <div className = "cardWrapper">
            <div>
                <header>
                    <h1>{props.content.title}</h1>
                </header>
            <article id = "up">
                <div className = "contents">
                    <p>{props.content.content}</p>
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