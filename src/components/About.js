import React, { Component } from 'react';
import '../styles/about.css';
import PastorImage from '../images/pastor.jpeg';
// import PastorFamilyImage from '../images/pastorFamily.jpeg';

export default class About extends Component {
    render() {
        return(
            <div>
                <div className="about-header" data-aos="fade-down" data-aos-duration="1500">
                    <p className="header-title"><span><i className="fas fa-quote-left" style={{fontSize: '40px', padding: '0 20px 35px 0'}}></i></span>한 사람</p><br/>
                    <p className="header-pop">한 영혼<span><i className="fas fa-quote-right" style={{fontSize: '40px', paddingLeft: '20px', position: 'absolute'}}></i></span></p>
                    <div className="hover-space"></div>
                </div>
                
                <div className="about-mission-statement-container">
                    <div className="about-mission-statement-welcome">
                        <p>Welcome!</p>
                        <p style={{fontFamily: 'Nanum Pen Script, cursive'}}>환영합니다!</p>
                    </div>
                    <div className="about-liner"></div>
                    <div id="korean" className="about-mission-statement">
                        <div className="about-images-container">
                            <img className="pastor-image" src={PastorImage} />
                        </div>
                        <h3>담임목사 인사와 안내</h3>
                        <p>
                        인생에 대하여 '왜 사는가? 무엇을 위해서 어떻게 살아야 하는가?'에 대한 진지한 질문을 하던 중 아무에게도 제대로 된 답을 찾지 못해 방황하다가 성경 말씀속에서 그 해답을 찾고 진리로 인한 자유함을 누리다가 목회자의 부름을 받아서 목회자가 되었습니다.<br/><br/>
                        한국에서 총신대학교 신학대학원에서 신학을 공부하고 명지대학교에서 교목을 하다가 11년전 복음의 지경을 넓히고자 떠났던 여정속에서 그레이스 한인교회를 만나게 되고 박신일 목사님을 통하여 복음의 능력에 다시 불을 붙이는 회복의 기회를 가지고 복음의 깊이와 넓이가 얼마나 큰 지를 깨닫는 지경이 넓어지는 은혜의 여정을 10년동안 가지게 되었습니다.<br/><br/>
                        이후 다시금 인생을 왜 살고 무엇을 위해서 살아야 하는지 모르고 방황하며 마음이 상하고 포로되고 갇힌 한 영혼, 한 영혼과 그 가정에 예수 그리스도의 복음과 은혜가 흘러들어가 삶의 이유를 깨닫고 변화되고 회복시키는 주의 은혜의 해를 전하는 가족 공동체 교회의 비전을 주셔서 새롭게 주은혜교회를 개척하게 되었습니다.<br/>
                        영어로는 J-Grace Community Church로 Jesus of Grace와 Joy of Grace 두가지 비전을 담아 예수님께 그리고 함께 하는 모든 사람에게 기쁨이 되고 예수님의 이름만 높이는 교회가 되기를 소원하며 이름을 정하게 되었습니다.<br/><br/>
                        인생에 대한 진지한 고민을 가진 분, 가정의 어려움속에 방향을 찾고 계신 분, 진리에 대한 갈망이 있는 분, 의미있고 가치 있는 삶에 대한 간절함이 있는 분 누구나 환영합니다!<br/><br/>
                        주은혜교회안에서 함께 인생의 올바른 방향과 답변을 찾아가길 소원합니다.<br/>
                        </p>
                        <p>송관빈 목사 드림</p>
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