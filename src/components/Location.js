import React, { Component } from 'react';
import '../styles/location.css'
import ParkingDetails from '../images/parkingDetails.jpeg'

export default class Location extends Component {
    render() {
        return(
            <div>
                <div className="location-header" data-aos="fade-down" data-aos-duration="1500">
                    {/* <h1 id="korean">오시는 길</h1> */}
                    <h2>Come Visit <span>!!</span></h2>
                    <a href="#location"><i className="fas fa-chevron-down"></i></a>
                </div>
                <div className="location-wrapper">
                    <div id="location" className="location-container">
                        <div className="location-description" >
                            <div className="address">
                                <h3>예배장소</h3>
                                <p>7837 Canada Way<br/>Burnaby, BC, V3N 3K8</p>
                            </div>
                            <div className="address-office">
                                <h3>J 센터 (사무실)</h3>
                                <p>#208-931 Brunette Ave<br/>Coquitlam, BC, V3K 6T5</p>
                            </div>
                            <div className="parking">
                                <h3>주차안내</h3>
                                <p>외부 주차장은 Canada Way 거리에서 진입 가능합니다.<br/>
                                지하 주차장은 외부 주차장 진입 후 끝편에서부터 진입하실 수 있습니다.</p>
                            </div>
                            <div className="email">
                                <h3>Email</h3>
                                <p>jgrace.info@gmail.com</p>
                            </div>
                            <div className="phone">
                                <h3>Phone</h3>
                                <p>604-961-4711</p>
                            </div>
                        </div>
                        
                        <iframe
                            className="google-map-api"  
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.0938468169775!2d-122.93533018445365!3d49.2177472793243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677db3a268419%3A0x5012b4e027c09ea8!2s7837+Canada+Way%2C+Burnaby%2C+BC+V3N+3K8!5e0!3m2!1sko!2sca!4v1553357785997"
                            >
                        </iframe>
                        {/* <img alt="parkingdetails" src={ParkingDetails} /> */}
                        
                    </div>
                </div>
                
            </div>
        )
    }
}