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
                        <p>A church that transforms homes into Christ-centered families<br/>예수 그리스도의 은혜로 가정이 변화되는 가족 공동체 교회</p>
                    </div>
                </div>
                <div className="mission-community-container" style={{marginTop: '1em', width: '85%'}}>
                    <div className="mission-statement">
                        <p>하나님의 은혜와 영광을 경험하는<br/><h2>예배 공동체</h2></p>
                        <p>복음안에서 삶을 나누고 인생이 성숙해지는<br/><h2>나눔 공동체</h2></p>
                        <p>약속의 말씀에 기쁨으로 순종하는<br/><h2>제자 공동체</h2></p>
                        <p>하나님 나라의 소원이 이루어지게 하는<br/><h2>미션 공동체</h2></p>

                    </div>
                    <div className="vision-community-logo-container">
                        <i className="fas fa-church"></i>
                    </div>
                </div>
                <div className="outer-service-container">
                    <h2 className="service">예배안내</h2>
                    <div className="service-time-container">
                        <div className="service-sunday">
                            <p>주일예배</p>
                            <p>일요일 1시</p>
                        </div>
                        <div className="service-saturday">
                            <p>새벽예배</p>
                            <p>시간</p>
                        </div>
                        <div className="service-friday">
                            <p>금요예배</p>
                            <p>시간</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
