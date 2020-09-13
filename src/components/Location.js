import React, { Component } from 'react';
import '../styles/location.css'


export default class Location extends Component {
    render() {
        return(
            <div>
                <div className="location-header" data-aos="fade-down" data-aos-duration="1500">
                    {/* <h1 id="korean">오시는 길</h1> */}
                    <h2>오시는 길</h2>
                    <a href="#location"><i className="fas fa-chevron-down"></i></a>
                </div>
                <div className="location-wrapper">
                    <div id="location" className="location-container">
                        <div className="location-description" >
                            <div className="address">
                                <h3>예배장소</h3>
                                <p>#203 - 931 Brunette Ave<br/>Coquitlam, BC, V3K 6T5</p>
                            </div>
                            <div className="address-office">
                                <h3>J 센터 (사무실)</h3>
                                <p>#204 - 931 Brunette Ave<br/>Coquitlam, BC, V3K 6T5</p>
                            </div>
                            {/* <div className="parking">
                                <h3>주차안내</h3>
                                <p>외부 주차장은 Canada Way 거리에서 진입 가능합니다. 건물내 지하 주차장이 만차일 경우, 건녀편 11th Ave 거리나 윗편 12th Ave 에 주차 하실 수 있습니다.</p>
                            </div> */}
                            <div className="email">
                                <h3>Email</h3>
                                <p>j-gcc.info@j-grace.org</p>
                            </div>
                            <div className="phone">
                                <h3>Phone</h3>
                                <p>604-961-4711</p>
                            </div>
                        </div>
                        
                        <iframe
                            className="google-map-api"  
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.049949739428!2d-122.87320998474382!3d49.23754218188969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486780d9c52987f%3A0xea8886742e750f00!2s203-931%20Brunette%20Ave%2C%20Coquitlam%2C%20BC%20V3K%206T5!5e0!3m2!1sen!2sca!4v1598151050653!5m2!1sen!2sca"
                            >
                        </iframe>
                        
                        
                    </div>
                </div>
                
            </div>
        )
    }
}