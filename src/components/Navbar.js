import React, { Component } from 'react';
import '../styles/navbar.css';
import Logo from '../images/logo.jpg'

export default class NavBar extends Component {
    state = {
        initialScroll: 0, opacity: 0.8
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    };

    handleScroll = () => {
        const initialScroll = this.state.initialScroll;
        const currentScroll = window.scrollY;
        if (currentScroll > initialScroll) {
            this.setState({ opacity: 1 })
        } else if (currentScroll < 1){
            this.setState({ opacity: 0.8 })
        }
    };

    render() {
        return(
            <div onScroll={this.handleScroll} className="nav-container" style={{opacity: this.state.opacity}}>
                {/* <a className="nav-home" href="/">주 은혜교회<br/>J-Grace Community Church</a> */}
                <a className="nav-home" href="/"><img className="nav-logo" alt="logo" src={Logo} /></a>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">환영합니다!</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/people">섬기는 사람들</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/news">교회소식</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/location">오시는길</a>
                    </li>
                </ul>
            </div>
        )
    }
}