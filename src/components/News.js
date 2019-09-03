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
                                <p className="announcements-detail">주은혜교회 새교우로 등록하시길<br className="space320" /> 원하시는 <br className="space375" />분은<br className="space411" /> 새교우실로 오셔서<br className="space320" /> 등록카드를 <br className="space375" />작성해 주시기<br className="space411" /> 바랍니다.</p>
                                <p className="announcements-detail">(문의: 김영훈 604.781.3535)</p>
                            </div>
                        </div>
                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    안내
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주은혜가족 모임안내</p>
                                <p className="announcements-detail">예배후 주은혜 연령대별 모임이 <br className="space320" />로비에서 <br className="space375" />있습니다.</p>
                                <p className="announcements-detail">남성장년: 김현철<br/>여성장년: 최교숙<br/>청년: 유관욱, 남혜림</p>
                            </div>
                        </div> */}
                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    6/23, 30 <br/>주일<br/>오후
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주은혜가족 모임안내</p>
                                <p className="announcements-detail">주은혜 새가족모임을<br className="space375" /><br className="space320" />  6/23, 6/30 <br className="space411" />오후에 있습니다.</p>
                                <p className="announcements-detail">(문의: 김영훈 604.781.3535)</p>
                            </div>
                        </div> */}
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    주은혜교회<br/>
                                    수련회
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주은혜 온가족 수련회</p>
                                <p className="announcements-detail"><b>주제:</b> 하나님의 마음을 시원케 하는 가족 공동체</p>
                                <p className="announcements-detail"><b>일시:</b> 8/4 주일 2PM - 8/5 월요일 11AM</p>
                                <p className="announcements-detail"><b>회비:</b> 성인 1인당 $35</p>
                                <p className="announcements-detail"><b>장소:</b> ICTC 12969 Rd. Surrey, BC</p>
                                <p className="announcements-detail">다음주 7/7 일 부터 신청을 받습니다. <br className="space411"/><br className="space375"/>주은혜가족 모두와 참석을 원하시는 <br className="space320"/>분들은 <br className="space411"/><br className="space375"/>누구나 함께 하실 수 있습니다</p>
                                <p className="announcements-detail">(문의: 김낙선 778.554.3920 / <br className="space411"/><br className="space375"/><br className="space320"/>김현철 778.385.0020)</p>
                            </div>
                        </div>

                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    7/24  수<br/>
                                    7:30 PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                            <p className="announcements-title">주은혜교회 양육을 위한 도서나눔 모임 안내</p>
                                <p className="announcements-detail">7월-8월 선정도서: "작은 교회가 답이다"<br className="space375" /> <br/>- 데이브 브라우닝</p>
                                {/* <p className="announcements-detail"><b>주제:</b> 진리와 자유</p> */}
                                <p className="announcements-detail"><b>장소:</b> J-Center</p>
                                <p className="announcements-detail">(문의: 김낙선 778.554.3920)</p>
                            </div>
                        </div>

                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    7/26  금<br/>
                                    8 PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">금요부흥회 안내</p>
                                
                                <p className="announcements-detail">모임 장소: 주일예배처소</p>
                            </div>
                        </div> */}
                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    안내
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주일간식 도네이션</p>
                                <p className="announcements-detail">주일간식 도네이션에 마음있으신 분은<br className="space375" /><br className="space320"/>간식배정표를 기재해주시면 감사합니다.</p>
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