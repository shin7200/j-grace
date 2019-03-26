import React, { Component } from 'react';
import '../styles/about.css';

export default class About extends Component {
    render() {
        return(

            <div className="about-header">
                <p className="header-title"><span><i class="fas fa-quote-left" style={{fontSize: '40px', padding: '0 20px 35px 0'}}></i></span>한 사람</p>
                <p className="header-pop">한 영혼<span><i class="fas fa-quote-right" style={{fontSize: '40px', paddingLeft: '20px', position: 'absolute'}}></i></span></p>
            </div>

        )
    }
}