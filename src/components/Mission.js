import React, { Component } from 'react';
import '../styles/mission.css'

export default class Mission extends Component {
    render() {
        return(
            <div>
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
                <div className="mission-community-container" style={{marginTop: '1em'}}>
                    <div className="mission-statement">
                        <h2>Vision Statement</h2>
                        <p>A church that transforms homes into Christ-centered families<br/>예수 그리스도의 은혜로 가정이 변화되는 가족 공동체 교회</p>
                    </div>
                    <div className="vision-logo-container">
                        <i className="fas fa-church"></i>
                    </div>
                </div>
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
        )
    }
}
