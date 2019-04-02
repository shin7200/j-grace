import React, { Component } from 'react';
import '../styles/news.css';

export default class News extends Component {
    render() {
        return(
            <div>
                <div className="news-header">
                
                </div>
                <div className="announcement-outer-container">
                    <div className="announcement-container">
                        <div className="announcement-header" data-aos="fade-down">
                            <h1>Announcements <i style={{fontSize: '30px'}}className="far fa-newspaper"></i></h1>
                        </div>
                        <div id="korean" className="announcements" data-aos="fade-down">
                            <p><span className="announcements-num"></span><span className="announcements-date-place">4/4 목요일 7pm  @ 샬롬홀</span><br/>주은혜교회 마지막 중보기도모임</p>
                            <p><span className="announcements-num"></span><span className="announcements-date-place">4/17 수요일 - 4/19 금요일 @ 주은혜교회 사무실</span><br/>주은혜교회 첫예배를 위한 주간기도모임</p>
                        </div>
                        <div className="weekly-paper">
                            <button>이전 주 주보</button>
                        </div>
                    </div>
                    <div className="announcements-other">
                        <div className="announcements-other-header">
                            <h1>다른광고 ETC</h1>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}