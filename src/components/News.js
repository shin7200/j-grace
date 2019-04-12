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
                        {/* <div className="news-liner"></div> */}
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    4/4 목<br/>7 PM
                                </div>
                            </div>
                            <div id="korean" className="announcements-place-detail-container">
                                <span className="announcements-place">@ 샬롬홀</span><br/>
                                <span className="announcements-detail">주은혜교회 마지막 기도모임</span>
                            </div>
                        </div>
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    4/17 수<br/>to<br/>4/19 금
                                </div>
                            </div>
                            <div id="korean" className="announcements-place-detail-container">
                                <span className="announcements-place">@ 비전센터(사무실)</span><br/>
                                <span className="announcements-detail">주은혜교회 첫예배를 위한 주간기도모임</span>
                            </div>
                        </div>
                        <div className="weekly-paper">
                            <span onClick={() => this.onClickLastWeek()}>이전 주 주보</span>
                        </div>
                    </div>
                    <div className="announcements-other">
                        <div className="announcements-other-header">
                            <h1>다른광고 ETC</h1>
                        </div>
                    </div>
                </div>
                {this.state.lastWeeklyUpdateClicked ? <LastWeeklyUpdatePopup /> : null }
            </div>
        )
    }
}