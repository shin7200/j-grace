import React, { Component } from 'react';
import '../styles/sermonPopup.css';
import SermonLogo from '../images/sermonImages/sermonAudioLogo.png';

export default class SermonPopup extends Component {
    render() {
        
        return(
            <div className="sermon-popup">
                <div className="sermon-popup-container">
                    <button onClick={() => this.props.popupClose()} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <img src={SermonLogo} />
                    <audio controls>
                        <source src={`https://j-grace.s3-us-west-2.amazonaws.com/${this.props.clickedDate}.mp3`} type="audio/mp3" />
                    </audio>
                </div>
            </div>
        )
    }
}
