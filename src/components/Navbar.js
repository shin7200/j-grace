import React, { Component } from 'react';
import '../styles/navbar.css';
import Logo from '../images/logo.png'
import RespNav from './RespNav';


export default class NavBar extends Component {
    state = {
        initialScroll: 0, 
        background: 'transparent',
        respNavClicked: false,
        opacity: 0.8,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    };

    handleScroll = () => {
        const initialScroll = this.state.initialScroll;
        const currentScroll = window.scrollY;
        if (currentScroll > initialScroll) {
            this.setState({ background: '#333', color: '#fff', opacity: 0.85 })
        } else if (this.state.respNavClicked) {
            this.setState({ background: '#333'})
        } else if (currentScroll < 1) {
            this.setState({ background: 'transparent', color: '#fff', opacity: 0.85 })
        }
    };

    respNavClicked = () => {
        const currentScroll = window.scrollY;
        // window.scrollTo({top: 0, behavior: 'smooth'});
        this.setState({respNavClicked: !this.state.respNavClicked, background: '#333'});
        // if (this.state.respNavClicked || currentScroll <= 0) {
        //     this.setState({background: '#333'})
        // } else {
        //     this.setState({background: 'transparent'})
        // }
    }

    respNavMenuClicked = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.setState({respNavClicked: !this.state.respNavClicked, background: 'transparent'});
    }

    navMenuClicked = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.setState({
            
            background: 'transparent'
        });
    }

    render() {
        return(
            <nav onScroll={this.handleScroll} className="nav-container navbar-expand-xl" style={{background: this.state.background, opacity: this.state.opacity}}>
                <a style={{color: this.state.color}}className="nav-home" href="/">
                    <img src={Logo}/>
                    주은혜교회<br/>
                    <div className="JGCC">
                        <span>J</span>-<span>G</span>race <span>C</span>ommunity <span>C</span>hurch
                    </div>
                </a>
                <a style={{color: this.state.color}}className="resp-nav-home" href="/">
                    <img src={Logo}/>
                    주은혜교회<br/>
                    <div className="JGCC">
                        <span>JGCC</span>
                    </div>
                </a>
                <i onClick={this.respNavClicked} className="fas fa-bars nav-menu"></i>
                {this.state.respNavClicked ? <RespNav respNavMenuClicked={this.respNavMenuClicked} /> : null}
                <ul className="nav">
                    <li className="nav-item">
                        <a onClick={this.navMenuClicked} style={{color: this.state.color}} className="nav-link" href="/#/about">환영합니다!</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.navMenuClicked} style={{color: 'grey'}} className="nav-link disabled" href="/#/people">섬기는 사람들</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.navMenuClicked} style={{color: this.state.color}} className="nav-link" href="/#/news">교회소식</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.navMenuClicked} style={{color: this.state.color}} className="nav-link" href="/#/location">오시는 길</a>
                    </li>
                </ul>

            </nav>
        )
    }
}