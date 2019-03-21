import React, { Component } from 'react';
import '../styles/navbar.css';
import Logo from '../images/logo.jpg'

export default class NavBar extends Component {
    render() {
        return(
            <div className="nav-container">
                {/* <a className="nav-home" href="/">주 은혜교회<br/>J-Grace Community Church</a> */}
                <a className="nav-home" href="/"><img className="nav-logo" src={Logo} /></a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/about/">환영합니다!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">링크</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">교회소식</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">오시는길</a>
                    </li>
                </ul>
            </div>
        )
    }
}