import React, { Component } from 'react';
import '../styles/mission.css'

export default class Mission extends Component {
    render() {
        return(
            <div className="mission-container">
                <i className="fas fa-cross"></i>
                <div className="mission-statement">
                    <h2>Mission Statement</h2>
                    <p>mission statement goes here</p>
                </div>
            </div>
        )
    }
}
