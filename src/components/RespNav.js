import React, {Component} from 'react';
import '../styles/respNav.css'
import Video from './SermonVideo';

export default class RespNav extends Component {
    render() {
        return(
            
            <ul className="resp-nav" data-aos="fade-down" >
                <li className="resp-nav-item">
                    <a onClick={this.props.respNavMenuClicked} className="resp-nav-link" href="/">주은혜교회</a>
                </li>
                <li className="resp-nav-item">
                    <a onClick={this.props.respNavMenuClicked} className="resp-nav-link" href="/#/about">환영합니다!</a>
                </li>
                {/* <li className="resp-nav-item">
                    <a onClick={this.props.AnniVideoClicked} style={{color: '#fff', cursor: 'pointer'}} className="resp-nav-link">창립 영상</a>
                </li> */}
                <li className="resp-nav-item">
                    <a onClick={this.props.respNavMenuClicked} className="resp-nav-link" href="/#/sermon">주일 설교말씀</a>
                </li>
                {/* <li className="resp-nav-item">
                    <a onClick={this.props.respNavMenuClicked} className="resp-nav-link" href="/#/emps">새벽기도</a>
                </li> */}
                <li className="resp-nav-item">
                    <a onClick={this.props.respNavMenuClicked} className="resp-nav-link" href="/#/news">교회소식</a>
                </li>
                <li className="resp-nav-item">
                    <a onClick={this.props.respNavMenuClicked} className="resp-nav-link" href="/#/location">오시는 길</a>
                </li>
            </ul>
        )
    }
}