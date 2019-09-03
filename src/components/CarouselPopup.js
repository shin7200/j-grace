import React, { Component } from 'react';
import '../styles/carousel-popup.css'

export default class CarouselPopup extends Component {
    render() {
        return(
            <div className="carousel-popup">
                <div className="carousel-popup-container">
                    <button onClick={() => this.props.popupClose()} type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button><br/>
                    
                </div>
            </div>
        )
    }
}