import React, { Component } from 'react';
import '../styles/navbar.css';
// import Logo from '../images/logo.jpg'

export default class NavBar extends Component {
    state = {
        initialScroll: 0, background: 'transparent'
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    };

    handleScroll = () => {
        const initialScroll = this.state.initialScroll;
        const currentScroll = window.scrollY;
        if (currentScroll > initialScroll) {
            this.setState({ background: '#fff', color: '#333', opacity: 0.8 })
        } else if (currentScroll < 1){
            this.setState({ background: 'transparent', color: '#fff' })
        }
    };

    render() {
        return(
            <div onScroll={this.handleScroll} className="nav-container" style={{background: this.state.background, opacity: this.state.opacity}}>
                <a style={{color: this.state.color}}className="nav-home" href="/">주은혜교회<br/>JGCC</a>
                {/* <a className="nav-home" href="/"><img className="nav-logo" alt="logo" src={Logo} /></a> */}
                <ul className="nav">
                    <li className="nav-item">
                        <a style={{color: this.state.color}} className="nav-link" href="/about">환영합니다!</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color: this.state.color}} className="nav-link" href="/people">섬기는 사람들</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color: this.state.color}} className="nav-link" href="/news">교회소식</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color: this.state.color}} className="nav-link" href="/location">오시는 길</a>
                    </li>
                </ul>
            </div>
        )
    }
}