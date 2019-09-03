import React, { Component } from 'react';
import '../styles/mission.css';
import MissionCommunity from '../images/mission.png';

export default class Mission extends Component {
    locationLinkClicked = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
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
                        <div className="vision-statement-korean">
                            <p><b style={{color: '#E67E22'}}>예수 그리스도</b>의 은혜로 가정이 변화되는<span style={{background: '#E67E22', color: '#333', padding: '0.3em', width: 'fit-content'}}>가족 공동체 교회</span></p>  
                        </div>
                    </div>
                </div>
                <div className="mission-community-container" style={{marginTop: '1em', width: '70%'}}  data-aos="fade-down" data-aos-easing="linear">
                    <div className="mission-statement">
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
                    <div className="service-container">
                        <div className="service-time-container" data-aos="fade-down">
                            <p className="service-type"><type>주일예배</type><span>매주 일요일 오후 1시</span></p>
                            <p className="service-type"><type>제자양육</type><span>매주 금요일 오후 7시</span></p>
                            <p className="service-type"><type>금요부흥회</type><span>매월 금요일 3째 주</span></p>
                            <p className="service-type"><type>지성소 기도회</type><span>매주 토요일 오전 9 30시</span></p>
                        </div>
                        <div className="main-page-location-container" data-aos="fade-down">
                            <div className="main-page-location">
                                <i className="fas fa-map-pin" style={{fontSize: '20px', marginTop: '0.2em', marginRight: '4.75px'}}></i>
                                <ul>
                                    <li><b>location (장소) <a onClick={this.locationLinkClicked} href="/#/location">오시는 길</a></b></li>
                                    <li>Burnaby Hall</li>
                                    <li>7837 Canada Way | Burnaby BC</li>
                                </ul>
                            </div>
                            <div className="main-page-email">
                                <i className="far fa-envelope email-icon" style={{fontSize: '16px', marginTop: '0.45em'}}></i>
                                <ul>
                                    <li><b>email</b></li>
                                    <li><a href="mailto:jgrace.info@gmail.com">jgrace.info@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="main-page-phone">
                                <i className="fas fa-mobile-alt phone-icon" style={{fontSize: '20px', marginTop: '0.25em', paddingLeft: '0.1em'}}></i>
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
                            <p>이번주 말씀과 찬양</p>
                        </div>
                        <div className="this-month-scripture" >
                            <b>고린도후서 6:9-10</b>
                            <p>무명한 자 같으나 유명한 자요 죽은 자 같으나 보라 우리가 살아 있고 징계를 받는 자 같으나 죽임을 당하지 아니하고 <br/>
                            근심하는 자 같으나 항상 기뻐하고 가난한 자 같으나 많은 사람을 부요하게 하고 아무 것도 없는 자 같으나 모든 것을 가진 자로다
                            </p>
                        </div>
                        <div className="this-month-hymn">
                            <b>이번 달 찬양</b> 
                            <p>주를 향한 나의 사랑을 by Geoff Bullock</p>
                        </div>
                        <div className="this-month-word">
                            <p>"인생의 큰 비극은 응답받지 못한 기도가 아니라, 드려지지 않는 기도다"</p>
                            <p className="this-month-word-author">- F.B. 마이어</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
