import React, { Component } from 'react';
import '../styles/mission.css'

export default class Mission extends Component {
    render() {
        return(
            <div className="outer-mission-container">
                <div className="mission-container">
                    <div className="vision-logo-container">
                        {/* <i id="cross" className="fas fa-cross"></i> */}
                        {/* <i className="fas fa-church"></i> */}
                        <i id="hand-heart" className="fas fa-hand-holding-heart"></i>
                    </div>
                    <div className="mission-statement">
                        <h2>Vision Statement</h2>
                        <p>A church that transforms homes into Christ-centered families</p>
                        <p id="korean">예수 그리스도의 은혜로 가정이 변화되는 <span style={{background: '#E67E22', color: '#333'}}>가족 공동체 교회</span></p>
                    </div>
                </div>
                <div className="mission-community-container" style={{marginTop: '1em', width: '85%'}}>
                    <div id="korean" className="mission-statement">
                        <p>하나님의 은혜와 영광을 경험하는<br/><span>예배 공동체</span></p>
                        <p>복음안에서 삶을 나누고 인생이 성숙해지는<br/><span>나눔 공동체</span></p>
                        <p>약속의 말씀에 기쁨으로 순종하는<br/><span>제자 공동체</span></p>
                        <p>하나님 나라의 소원이 이루어지게 하는<br/><span>미션 공동체</span></p>

                    </div>
                    <div className="vision-community-logo-container">
                        <i className="fas fa-church"></i>
                    </div>
                </div>
                <div className="outer-service-container">
                    <p className="service">예배안내</p>
                    <div id="korean" className="service-container">
                        {/* <p className="service">예배안내</p> */}
                        <div className="service-time-container">
                            {/* <div className="service-sunday"> */}
                                <p className="service-type">주일예배: <span>일요일 1시</span></p>
                                {/* <p className="service-time">일요일 1시</p> */}
                            {/* </div> */}
                            {/* <div className="service-saturday"> */}
                                <p className="service-type">새벽기도: <span>시간</span></p>
                                {/* <p className="service-time">시간</p> */}
                            {/* </div> */}
                            {/* <div className="service-friday"> */}
                                <p className="service-type">금요예배: <span>시간</span></p>
                                {/* <p className="service-time">시간</p> */}
                            {/* </div> */}
                        </div>
                        <div className="main-page-location-container">
                            <div className="main-page-location">
                                <i class="fas fa-map-pin" style={{fontSize: '20px', marginTop: '0.1em', marginRight: '4.75px'}}></i>
                                <ul>
                                    <li><b>location (장소)</b></li>
                                    <li>Burnaby Hall</li>
                                    <li>7837 Canada Way | Burnaby BC | V3N 3K8</li>
                                </ul>
                            </div>
                            <div className="main-page-email">
                                <i class="far fa-envelope" style={{fontSize: '16px', marginTop: '0.3em'}}></i>
                                <ul>
                                    <li><b>email</b></li>
                                    <li>jgrace.info@gmail.com</li>
                                </ul>
                            </div>
                            <div className="main-page-phone">
                                <i class="fas fa-mobile-alt" style={{fontSize: '20px', marginTop: '0.1em', marginRight: '3.5px'}}></i>
                                <ul>
                                    <li>604-123-1234</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="main-page-email">
                            
                        </div> */}
                    </div>
                </div>
                <div className="this-month">
                        
                </div>
            </div>
        )
    }
}
