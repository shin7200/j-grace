import React, {Component} from 'react';
import '../styles/respNav.css'

export default class RespNav extends Component {
    render() {
        return(
            <ul className="resp-nav">
                <li className="resp-nav-item">
                    <a className="resp-nav-link" href="/">주은혜교회</a>
                </li>
                <li className="resp-nav-item">
                    <a className="resp-nav-link" href="/about">환영합니다!</a>
                </li>
                <li className="resp-nav-item">
                    <a className="resp-nav-link disabled" href="/people">섬기는 사람들</a>
                </li>
                <li className="resp-nav-item">
                    <a className="resp-nav-link" href="/news">교회소식</a>
                </li>
                <li className="resp-nav-item">
                    <a className="resp-nav-link" href="/location">오시는 길</a>
                </li>
            </ul>
        )
    }
}