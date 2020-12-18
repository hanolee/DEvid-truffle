import React from 'react';
import './COCCardView.style.css';

function COCCardView(props){
    return(
        <div className = "cardWrapper">
            <header>
    <h1>{props.content.title}</h1>
            </header>
            <article>
                <div className = "contents">
                    {props.content.content}
                </div>
                <div className = "imgshot">
                </div>
            </article>
            <article>
                <header>
            <h2>{props.content.subtitle}</h2>
                </header>
            <ul>
                <h3>이거 리액트 문법 써서 자동으로 기입</h3>
            </ul>    
            </article>

        </div>
    )
}


export default COCCardView;