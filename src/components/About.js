import React, { Component } from 'react';
import '../styles/about.css';

export default class About extends Component {
    render() {
        return(
            <div>
            <div className="about-header">
                <p className="header-title"><span><i class="fas fa-quote-left"></i></span>한 사람</p>
                <p className="header-pop">한 영혼</p>
            </div>
                {/* <div className="test">
                <h3>한 영혼</h3>
                </div> */}
            </div>
        )
    }
}