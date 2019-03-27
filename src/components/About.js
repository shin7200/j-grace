import React, { Component } from 'react';
import '../styles/about.css';

export default class About extends Component {
    render() {
        return(
            <div>
                <div className="about-header" data-aos="fade-down" data-aos-duration="1500">
                    <p className="header-title"><span><i class="fas fa-quote-left" style={{fontSize: '40px', padding: '0 20px 35px 0'}}></i></span>한 사람</p><br/>
                    <p className="header-pop">한 영혼<span><i class="fas fa-quote-right" style={{fontSize: '40px', paddingLeft: '20px', position: 'absolute'}}></i></span></p>
                </div>
                <div className="about-mission-statement-container">
                    <div className="about-mission-statement-welcome">
                        <p>Welcome!</p>
                        <p style={{fontFamily: 'Nanum Pen Script, cursive'}}>환영합니다!</p>
                    </div>
                    <div className="about-liner"></div>
                    <div id="korean" className="about-mission-statement">
                        <p>주은혜교회는...</p>
                        <p>내용</p>
                    </div>  
                </div>
                <div className="new-family-container">
                    <h1>새가족</h1>
                    <div className="new-family">    
                        <div className="box">
                            
                        </div>
                        <div className="box">
                            
                        </div>
                        <div className="box">
                            
                        </div>
                    </div>
                </div>
                
            </div>

        )
    }
}