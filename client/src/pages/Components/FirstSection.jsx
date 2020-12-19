import React from 'react';
import Header from './MainHeader';
import ShortButton from './ShortButton';
import './FirstSection.style.css';


function FirstSection(){
    
    return (
        <div className = "firstParagraph">

          <div className="imgpart"></div>      
          <div className="firstarticle">
            
            <Header/>
            
           <div className = "content1">
                <h2>디지털 내용증명 DEvid</h2>
                <div className = "line1"></div>
           </div>
           <div className ="content2">
                <h2>데빗은 쉽게 만들고 정확하게 보냅니다</h2>
                <h4>자동화된 방식으로 빠르고 편리하게</h4>
                <h4>위변조할 수 없는 연구적인 증거로</h4>
                <div className = "line2"></div>
           </div>
           
           <ShortButton 
           link = "/coc" 
           name = "자동 내용 증명 작성 & 보내기"/>
           
                </div>  
            
        </div> 
    );
}

export default FirstSection;

