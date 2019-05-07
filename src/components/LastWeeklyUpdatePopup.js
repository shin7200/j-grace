import React from 'react';
import '../styles/lastWeeklyUpdatePopup.css';
import LastWeeklyUpdateImage from '../images/LastWeeklyUpdate.pdf'

export default function LastWeeklyUpdatePopup() {
    ;
    return (
        <div className="last-weekly-update-container">
            <div className="last-weekly-update-popup">
                {/* <button onClick={this.props.onClickLastWeek}>close</button> */}
                <embed type='application/pdf' src={LastWeeklyUpdateImage} style={{width: '900px', height: '600px'}}/>
            </div>
        </div>
    )
}