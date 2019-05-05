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
    render() {
        return(
            <div>
                <div className="news-header" data-aos="fade-down" data-aos-duration="1500">
                    <div className="news-title" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <p>"하나님이 나의 증인이 되시거니와 <br/>항상 내 기도에 쉬지 않고"</p>
                    </div>
                </div>
                <div className="announcement-outer-container">
                    <div className="announcement-container" data-aos="fade-down">
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
                                <p className="announcements-detail">주은혜교회 새교우로 등록하시길 원하시는 분은 새교우실로 오셔서</p>
                                <p className="announcements-detail">등록카드를 작성해 주시기 바랍니다</p>
                                <p className="announcements-detail">(문의: 김영훈 권사 604.781.3535)</p>
                            </div>
                        </div>
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    5/10 금<br/>7 PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">첫 양육 제자 훈련</p>
                                <p className="announcements-detail">@ 주은혜교회 사무실</p>
                                <p className="announcements-detail">(복있는 삶으로의 초대) 모임</p>
                            </div>
                        </div>
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    매주<br/>토요일<br/>9:30 AM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">지성소 기도회</p>
                                <p className="announcements-detail">@ 주은혜교회 사무실</p>
                                <p className="announcements-detail">매주 주일예배를 위해서 중보기도하는 시간을 가집니다.</p>
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
                {this.state.lastWeeklyUpdateClicked ? <LastWeeklyUpdatePopup /> : null }
            </div>
        )
    }
}