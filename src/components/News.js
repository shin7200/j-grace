import React, { Component } from 'react';
import '../styles/news.css';
import LastWeeklyUpdatePopup from './LastWeeklyUpdatePopup';

export default class News extends Component {
    state = {
        lastWeeklyUpdateClicked: false,
    }
    
    componentDidMount() {
        document.addEventListener("keydown", this.escFunction);
    }

    componentWillUnmount() {
        document.addEventListener("keydown", this.escFunction);
    }
    
    escFunction = (event) => {
        if (event.keyCode === 27) {
            this.setState({lastWeeklyUpdateClicked: false})
        }
    }

    onClickLastWeek = () => {
        this.setState({lastWeeklyUpdateClicked: !this.state.lastWeeklyUpdateClicked});
        // console.log(this.state.lastWeeklyUpdateClicked);
    }
    popupClose = () => {
        this.setState({lastWeeklyUpdateClicked: !this.state.lastWeeklyUpdateClicked});
    }
    render() {
        return(
            <div>
                <div className="news-header" data-aos="fade-down" data-aos-duration="1500">
                    <div className="news-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <p>"하나님이 나의 증인이 되시거니와 <br/>항상 내 기도에 쉬지 않고"</p>
                    </div>
                </div>
                <div className="announcement-outer-container">
                    <div className="announcement-container" >
                        <div className="announcement-header">
                            <h1>교회소식 <i className="fas fa-bullhorn" style={{fontSize: '40px'}}></i></h1>
                        </div>
                        <div className="news-liner"></div>
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    환영<br/>및<br/>새교우
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">환영합니다!</p>
                                <p className="announcements-detail">주은혜교회 새교우로 등록하시길 원하시는 분은 새교우실로 오셔서 등록카드를 작성해 주시기 바랍니다</p>
                                <p className="announcements-detail">(문의: 김영훈 604.781.3535)</p>
                            </div>
                        </div>
                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    5/31 금<br/>8 PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">Family Praise Night(가족찬양제)</p>
                                <p className="announcements-detail">@ 주은혜교회 예배홀</p>
                                <p className="announcements-detail">주제: 내 평생의 찬양</p>
                                <p className="announcements-detail">대상: 모든 주은혜교회 가족</p>
                            </div>
                        </div> */}
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    6/2 주일<br/>11 AM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주은혜가족 야외예배 안내</p>
                                <p className="announcements-detail">주제: 주안에 우린 하나</p>
                                <p className="announcements-detail">대상: 주은혜교회 교우 및 초청대상자</p>
                                <p className="announcements-detail">장소: Mundy Park Picnic Shelter (587 Hilcrest St)</p>
                                <p className="announcements-detail">(문의: 김현철 604.385.0020)</p>
                            </div>
                        </div>
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    안내
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">2019 Camp Squeah</p>
                                <p className="announcements-detail">주은혜교회 다음세대 6yr - 17yr</p>
                                <p className="announcements-detail">대상으로 여름캠프를 안내드립니다</p>
                                <p className="announcements-detail">(관련 브로셔 / 문의: 권은영 604.807.3475)</p>
                            </div>
                        </div>
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    안내
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주일간식 도네이션</p>
                                <p className="announcements-detail">주일간식 도네이션에 마음있으신 분은 간식배정표를 기재해주시면 감사합니다</p>
                                {/* <p className="announcements-detail"></p> */}
                                <p className="announcements-detail">(관련문의: 김선민 778.235.1314)</p>
                            </div>
                        </div>
                        <div className="weekly-paper">
                            <span onClick={() => this.onClickLastWeek()}>이전 주 주보</span>
                        </div>
                    </div>
                    {/* <div className="announcements-other">
                        <div className="announcements-other-header">
                            <h1>다른광고 ETC</h1>
                        </div>
                    </div> */}
                </div>
                {this.state.lastWeeklyUpdateClicked ? <LastWeeklyUpdatePopup popupClose={this.popupClose} /> : null }
            </div>
        )
    }
}