import React, { Component } from 'react';
import '../styles/navbar.css';

export default class NavBar extends Component {
    render() {
        return(
            <div className="nav-container">
                <a className="nav-link" href="#">로고</a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Welcome!</a>
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