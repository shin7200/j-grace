import React, { Component } from 'react';
import '../styles/lastWeeklyUpdatePopup.css';
import LastWeeklyUpdateImage from '../images/lastWeeklyUpdate.png';

export default class LastWeeklyUpdatePopup extends Component {
    render() {
        return (
            <div className="last-weekly-update-container">
                <div className="last-weekly-update-popup">                    
                    <img src={LastWeeklyUpdateImage} alt="weeklyupdate"/>
                    <button onClick={this.props.popupClose}>닫기 / Close</button>
                </div>                
            </div>
        )
    }
    
}