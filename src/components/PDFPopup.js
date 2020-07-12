import React, { Component } from 'react';
import '../styles/pdf-popup.css';

export default class PDFPopup extends Component {
    render() {
        
        return(
            <div className="pdf-popup">
                <div className="pdf-popup-container">
                    <button onClick={() => this.props.popupClose()} type="button" className="sermon-video-close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button><br/>
                    
                    <iframe src={`https://docs.google.com/viewer?url=${this.props.PDFUrl}&embedded=true`}></iframe>

                </div>
            </div>
        )
    }
}