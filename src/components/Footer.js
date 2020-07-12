import React, { Component } from 'react';
import Logo from '../images/footerLogo.jpeg';
import '../styles/footer.css'

export default class Footer extends Component {
    render() {
        return(
            <div>
            <div className="footer-container">
                <div className="footer-left">
                    <img src={Logo} alt="logo" style={{width: '130px', height: '60px'}}/>
                    
                </div>
                <div className="footer-middle">
                    <p>예수 그리스도의 은혜로 가정이 변화되는 가족 공동체 교회</p>
                    <p>&copy; 2019 J-Grace Community Church</p>
                </div>
                <div className="footer-right">
                    <div className="contact">
                        <p>예배장소<span>|</span></p>
                        <p>J 센터(사무실)<span>|</span></p>
                        <p>Email<span>|</span></p>
                        <p>Phone<span>|</span></p>
                    </div>
                    <div className="contact-info">
                        <p>7837 Canada Way Burnaby BC</p>
                        <p>#208-931 Brunette Ave. Coquitlam BC</p>
                        <p>j-gcc.info@j-grace.org</p>
                        <p>604 961 4711</p>
                    </div>
                </div>
            </div>
            <div className="resp-footer-container">
                <div className="resp-footer-top">
                    <img src={Logo} alt="logo" style={{width: '130px', height: '60px'}}/>
                </div>
                <div className="resp-footer-middle">
                    <div className="contact">
                        <p><footerlist>예배장소</footerlist><span>|</span>7837 Canada Way Burnaby BC</p>
                        <p><footerlist>J 센터</footerlist><span>|</span>#208-931 Brunette Ave. Coquitlam BC(사무실)</p>
                        <p><footerlist>Email</footerlist><span>|</span>j-gcc.info@j-grace.org</p>
                        <p><footerlist>Phone</footerlist><span>|</span>604 961 4711</p>
                    </div>
                </div>
                <div className="resp-footer-end">
                    <p>예수 그리스도 중심의 삶으로 각 사람을 변화시키는<br className="space500"/> 가족 공동체 교회</p>
                    <p>&copy; 2019 J-Grace Community Church</p>
                </div>
            </div>

                

            </div>
        )
    }
}