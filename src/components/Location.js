import React, { Component } from 'react';
import '../styles/location.css'
import LocationImage from '../images/location.png'

export default class Location extends Component {
    render() {
        return(
            <div>
                <div className="location-header">
                    <h1>오시는 길</h1>
                </div>
                
                <iframe className="google-map" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.0938468169775!2d-122.93533018445365!3d49.2177472793243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677db3a268419%3A0x5012b4e027c09ea8!2s7837+Canada+Way%2C+Burnaby%2C+BC+V3N+3K8!5e0!3m2!1sko!2sca!4v1553357785997" 
                    style={{width: '400px', height: '300px'}}>
                </iframe>
            </div>
        )
    }
}