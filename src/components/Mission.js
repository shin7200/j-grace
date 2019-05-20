import React, { Component } from 'react';
import '../styles/mission.css';
import MissionCommunity from '../images/mission.png';

export default class Mission extends Component {
    render() {
        return(
            <div id="mission" className="outer-mission-container">
                <div className="mission-container" data-aos="fade-right" data-aos-easing="linear">
                    <div className="vision-logo-container">
                        {/* <i id="cross" className="fas fa-cross"></i> */}
                        {/* <i className="fas fa-church"></i> */}
                        <i id="hand-heart" className="fas fa-hand-holding-heart"></i>
                    </div>
                    <div className="vision-statement">
                        <h2>Vision Statement</h2>
                        <p>A church that transforms homes into Christ-centered families</p>
                        <div id="korean">
                            <p><b style={{color: '#E67E22'}}>예수 그리스도</b>의 은혜로 가정이 변화되는<span style={{background: '#E67E22', color: '#333', padding: '0.3em', width: 'fit-content'}}>가족 공동체 교회</span></p>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="mission-community-container" style={{marginTop: '1em', width: '70%'}}  data-aos="fade-down" data-aos-easing="linear">
                    <div id="korean" className="mission-statement">
                        <p>하나님의 은혜와 영광을 경험하는<br/><span>예배 공동체</span></p>
                        <p>복음안에서 삶을 나누고 인생이 성숙해지는<br/><span>셀 공동체</span></p>
                        <p>약속의 말씀에 기쁨으로 순종하는<br/><span>제자 공동체</span></p>
                        <p>하나님 나라의 소원이 이루어지게 하는<br/><span>미션 공동체</span></p>

                    </div>
                    <img className="mission-image" src={MissionCommunity} alt="mission" />
                </div>
                <div className="outer-service-container">
                    <div className="service-liner"></div>
                    <p className="service" data-aos="fade-down">예배 안내</p>
                    <div id="korean" className="service-container">
                        <div className="service-time-container" data-aos="fade-down">
                            <p className="service-type">주일예배 | <span>일요일 1시</span></p>
                            <p className="service-type">제자양육 | <span>매주 금요일 7시</span></p>
                            <p className="service-type">금요부흥회 | <span>매월 금요일 3째 주</span></p>
                        </div>
                        <div className="main-page-location-container" data-aos="fade-down">
                            <div className="main-page-location">
                                <i className="fas fa-map-pin" style={{fontSize: '20px', marginTop: '0.2em', marginRight: '4.75px'}}></i>
                                <ul>
                                    <li><b>location (장소) <a href="/#/location">오시는 길</a></b></li>
                                    <li>Burnaby Hall</li>
                                    <li>7837 Canada Way | Burnaby BC</li>
                                </ul>
                            </div>
                            <div className="main-page-email">
                                <i className="far fa-envelope" style={{fontSize: '16px', marginTop: '0.4em'}}></i>
                                <ul>
                                    <li><b>email</b></li>
                                    <li><a href="mailto:jgrace.info@gmail.com">jgrace.info@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="main-page-phone">
                                <i className="fas fa-mobile-alt" style={{fontSize: '20px', marginTop: '0.25em', paddingLeft: '0.1em'}}></i>
                                <ul>
                                    <li>604-961-4711</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="this-month-container">
                    <div data-aos="fade-down">
                        <div className="this-month-title">
                            <p>5월 말씀과 찬양</p>
                        </div>
                        <div id="korean" className="this-month-scripture" >
                            <b>잠언 25:13</b>
                            <p>충성된 사자는 그를 보낸 이에게 마치 추수하는 날에 얼음 냉수 같아서 <br/>능히 그 주인의 마음을 시원하게 하느니라</p>
                        </div>
                        <div id="korean" className="this-month-hymn">
                            <b>찬송가 481장</b> 
                            <p>십자가를 질 수 있나</p>
                        </div>
                        <div id="korean" className="this-month-word">
                            <p>"기도는 하늘에 계신 아버지의 품 안에서 영혼이 호흡하는 것이다"</p>
                            <p className="this-month-word-author">- 토마스 왓슨</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
