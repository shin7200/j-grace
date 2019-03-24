import React, { Component } from 'react';
import '../styles/location.css'
// import LocationImage from '../images/location.png'

export default class Location extends Component {
    render() {
        return(
            <div>
                <div className="location-header">
                    {/* <h1 id="korean">오시는 길</h1> */}
                    <h2>Come Visit !</h2>
                </div>
                <div className="location-reason" style={{paddingBottom: '0'}}>
                        <p>저희 교회는 ....</p>
                </div>
                <div className="google-map">
                    <div className="location-description">
                        <div id="korean" className="parking"><h3>주차안내</h3>
                        <p>외부 주차장은 Canada Way 거리에서 진입 가능합니다.<br/>
                        지하 주차장은 외부 주차장 끝편에서부터 진입하실 수 있습니다.</p>
                        </div><br/>
                        
                        <div className="address"><h3>Address</h3><p>7837 Canada Way<br/>Burnaby, BC, V3N 3K8</p></div><br/>
                        <div className="email"><h3>Email</h3><p>jgrace.info@gmail.com</p></div><br/>
                        
                        <div className="phone"><h3>Phone</h3></div>
                    </div>
                    <iframe  
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.0938468169775!2d-122.93533018445365!3d49.2177472793243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677db3a268419%3A0x5012b4e027c09ea8!2s7837+Canada+Way%2C+Burnaby%2C+BC+V3N+3K8!5e0!3m2!1sko!2sca!4v1553357785997"
                        style={{width: '600px', height: '400px', border: 'none', margin: 'auto 0',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}
                        >
                    </iframe>
                </div>
                
            </div>
        )
    }
}