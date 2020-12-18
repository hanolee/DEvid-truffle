import React from 'react';
import {Route, Link} from 'react-router-dom';
import Header from './MainHeader';
import ShortButton from './ShortButton';
import './FirstSection.style.css';


function FirstSection(){
    const firstContents = {
        first_line : "Certification of Contents",
        second_line : "can be a obstacle to people in legal problems",
        third_line : "With DEvid,",
        fourth_line : "we can do it very easily"
    };
    return (
        <div className = "firstParagraph">

          <div className="imgsection"></div>      
          <div className="firstarticle" article = {firstContents}>
            
          <Header/>
            
           <div className = "content1">
                <h4>Certification of Contents</h4>
                <h2>can be a obstacle to people in legal problems"</h2>
                <div className = "line1"></div>
           </div>
           <div className ="content2">
                <h4>With DEvid</h4>
                <h2>we can do it very easily</h2>
                <div className = "line2"></div>
           </div>
           <ShortButton 
           link = "/coc" 
           name = "Let's go to write Certification of Contents"/>
                </div>  
            
        </div> 
    );
}

export default FirstSection;

