import React, { Component } from 'react';
import '../styles/news.css';
import LastWeeklyUpdatePopup from './LastWeeklyUpdatePopup';
import PDFPopup from './PDFPopup';

export default class News extends Component {
    state = {
        lastWeeklyUpdateClicked: false,
        PDFPopup: false,
        PDFUrl: ""
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
    }
    popupClose = () => {
        this.setState({lastWeeklyUpdateClicked: !this.state.lastWeeklyUpdateClicked});
    }
    onClickPDFPopup = (PDFUrl) => {
        this.setState({PDFPopup: !this.state.PDFPopup, PDFUrl: PDFUrl})
    }
    PDFpopupClose = () => {
        this.setState({PDFPopup: !this.state.PDFPopup})
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
                        {/* <div className="announcements">
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
                        </div> */}

                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    2/19 수<br/>
                                    6:30 PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                            <p className="announcements-title">주은혜교회 수요 진리와 자유 모임 안내</p>                                
                                <p className="announcements-detail"><b>2월 선정도서: </b>기도 응답의 축복</p>
                                <p className="announcements-detail"><b>장소:</b> 주보 참조</p>                                
                                <p className="announcements-detail">참여를 원하시는 분은 도서주문 관계로 문의해 주시기 바랍니다</p>
                                <p className="announcements-detail">(문의: 김낙선 778.554.3920)</p>
                            </div>
                        </div> */}

                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    1/23 목 <br/>
                                    7:30PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주은혜교회 Microsoft 무료계정 이용안내</p>                             
                                <p className="announcements-detail">마이크로소프트사에서  Charity 기간에 주는 무료사용 Office365, Onedrive 계정이 승인이 되어 주은혜가족분들이 사용할 수 있는 기회가 제공되어 안내와 교육을 하는 시간을 가집니다.</p>
                                <p className="announcements-detail"><b>장소: </b>J-Center</p>
                                <p className="announcements-detail"><b>강사: </b>배인돈, 양창민(그레이스교회)</p>
                                <p className="announcements-detail">(문의: 유관욱 604.773.5989)</p>
                            </div>
                        </div> */}
                        
                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    안내
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">2020년 선교정탐 안내</p>
                                <p className="announcements-detail"><b>일시:</b> 2020년 2 월중</p>
                                <p className="announcements-detail">하나님 나라 확장을 위한 주은혜교회의 부름심을 확인하고자 도미니카 선교정탐을 계획합니다</p>
                                <p className="announcements-detail">(문의: 김현철 778.385.0020)</p>
                            </div>
                        </div> */}                        

                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    1/14 금<br/>
                                    8 PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">주은혜교회 금요부흥회 안내</p>                              
                                <p className="announcements-detail"><b>장소:</b> 주일예배처소</p>
                                
                                <p className="announcements-detail">2월에는 도미니카 선교정탐과 앞으로 계획하는 금요 양육과 기도회를 위해서 마음모아 기도하는 시간을 가지고자 둘째 금요일에 금요부흥회를 가지고자 합니다.</p>
                            </div>
                        </div> */}

                        

                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    안내
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">AGM(Annual General Meeting) 안내</p>
                                <p className="announcements-detail">교인전체 총회를 가집니다. (2019년 결산, 2020년 예산, 사역보고, 보드멤버 결정)</p>
                                <p className="announcements-detail"><b>일시 및 장소 : </b>3/15(주일) 주일예배 후 예배당</p>
                                
                            </div>
                        </div> */}

                        {/* <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    매주 금<br/>
                                    8 PM
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">금요 양육과 말씀기도회 안내(3 월 첫째주부터)</p>
                                <p className="announcements-detail"><b>첫째 주/둘째 주 : </b>말씀위에 서는 삶 양육</p>
                                <p className="announcements-detail"><b>셋째 주 : </b>통독후 말씀기도</p>
                                <p className="announcements-detail"><b>넷째 주 : </b>금요부흥회</p>
                                <p className="announcements-detail"><b>장소 : </b>첫째 주 - 셋째 주 J-Center, 넷째 주 주일예배장소</p>
                            </div>
                        </div> */}


                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    Teams<br/>
                                    안내
                                </div>
                            </div>

                            <div className="announcements-place-detail-container">
                                {/* <p className="announcements-title">Microsoft Teams App 사용 안내</p> */}
                                <p className="announcement-detail">
                                    <button className="pdf-popup-btn" onClick={() => this.onClickPDFPopup("https://j-grace.s3-us-west-2.amazonaws.com/MICROSOFT+TEAMS+GUIDLINE/MICROSOFT+TEAMS+GUIDLINE+DESKTOP.pdf")}>컴퓨터/노트북 안내</button>
                                </p>      
                                <p className="announcement-detail">
                                    <button className="pdf-popup-btn" onClick={() => this.onClickPDFPopup("https://j-grace.s3-us-west-2.amazonaws.com/MICROSOFT+TEAMS+GUIDLINE/MICROSOFT+TEAMS+GUIDLINE+MOBILE.pdf")}>모바일/핸드폰 안내</button>
                                </p>
                            </div>
                        </div>

                        <div className="announcements">
                            <div className="date-box-container">
                                <div className="date-box">
                                    안내
                                </div>
                            </div>
                            <div className="announcements-place-detail-container">
                                <p className="announcements-title">코로나 바이러스 관련 예배와 모임 변경과 주의사항 안내</p>
                                <p className="announcements-detail">3월16일부터 BC주 정부에서 50명 이상의 모임을 전면 금지하였습니다. 이로인해 주은혜교회 예배와 모임에 대한 변화에 대해서 안내해 드립니다.</p>
                                <p className="announcements-detail">예정되었던 금요양육과 기도회 모임 그리고 3월에 있는 금요부흥회는 취소합니다.</p>
                                <p className="announcements-detail">주일예배는 홈페이지(j-grace.org)를 통하여 영상예배로 진행됩니다. 가족들이 함께 컴퓨터나 TV 화면을 연결하여 주일예배시간에 함께 정성스러운 마음을 모아 예배드리시기 바랍니다.</p>
                                <p className="announcements-detail">이메일헌금(e-Transfer) 계정이 만들어져 있습니다.<br/>
                                - 주은혜교회 이메일헌금주소: offering@j-grace.org<br/>
                                - 메모난(memo)에 헌금하시는 분의 이름, 헌금번호, 헌금종류와 액수를 적어주세요. 만약 헌금번호가 없다면 본인의 주소와 전화번호를 써넣어주시기 바랍니다.<br/> 
                                - 비밀번호(security information)는 되도록 jgrace로 설정해 주시고, 만약 다른 비밀번호로 설정하셨으면 주은혜교회 헌금이메일(offering@j-grace.org)로 보내주세요
                                </p>
                                {/* <p className="announcements-detail">교인끼리 인사를 나눌때도 간단한 목례로 대신합니다.</p> */}
                                <p className="announcements-detail">계속해서 이 땅을 고쳐달라고 마음모아 기도해 주시기 바랍니다.</p>
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
                {this.state.PDFPopup ? <PDFPopup popupClose={this.PDFpopupClose} PDFUrl={this.state.PDFUrl}/> : null }
            </div>
        )
    }
}