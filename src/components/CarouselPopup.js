import React, { Component } from 'react';
import '../styles/carousel-popup.css';
import Logo from '../images/logo.png';

export default class CarouselPopup extends Component {
    render() {
        return(
            <div className="carousel-popup">
                <div className="carousel-popup-container">
                    <button onClick={() => this.props.popupClose()} type="button" className="sermon-video-close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button><br/>
                    {/* <video controls="controls"  
                        name="Video Name" src="https://j-grace.s3-us-west-2.amazonaws.com/20190908.mov">
                    </video>                        */}


                    <div className="covid-19-container">
                    주은혜교회 예배 및 모임 참석자 안전수칙<br/><br/>

                    주 정부의 완화 정책에 의해 50명 미만 교회 예배참석이 가능하게 되어 현장예배를 기도의 집, 제이센터(#203, #204  931 brunette ave. Coquitlam)에서 시작하게 되었습니다. 
                    교회에서는 WorkSafeBC 지침에 따라 교회의 Safety Plan과 예배 참석 지침을 알려드리고자 합니다. 예배 참석자 분들께서는 다음의 안전수칙을 지켜주시기 바랍니다.<br/><br/>

                    1.예배 참석 제한<br/>
                    다음에 해당하는 분은 교회를 방문하는 대신 각 가정에서 온라인 예배를 드시시길 권고합니다.<br/>
                    주은혜교회 Teams App을 꼭 설치하시기 바랍니다. 도움이 필요하신 분은 사무실로 찾아오시면 자세히 안내해 드립니다.<br/>

                    1] COVID-19 증상: 무력감, 고열, 기침, 오한, 숨가쁨, 호흡곤란, 인후통, 근육통, 두통, 갑작스러운 미각 또는 후각 상실등의 증상이 있는 분<br/>
                    2] 몸이 아프신 분: 감기를 동반한 증상, 설사등의 증상이 있는 분, 면역력이 떨어져 있는 상태<br/>
                    3] 2주간 자가 격리 중에 있는 분: 캐나다외의 지역을 방문하고 2주간 자가 격리중인 분<br/>
                    4] 기저 질환자<br/><br/>

                    2.예배 참석자 안전수칙<br/>
                    1] 손 세정제로 손을 닦아 주세요 <br/>
                    2] 필히, 마스크를 착용합니다<br/>
                    3] 헌금은 헌금바구니를 돌리지 않으므로 예배당 입장 시 입구에 마련된 헌금함에 넣어주세요<br/>
                    4] 좌석간 거리를 유지해 주세요(2M) <br/>
                    5] 인사는 목례를 권해드립니다<br/>

                    이상의 안전수칙을 잘 지켜 주셔서 모두가 쾌적하고 건강한 주일예배가 되시길 바랍니다.<br/>
                        
                        <div className="bottom">
                            <img src={Logo} style={{width: '35px', height: '35px', marginRight: '10px'}}/>
                             주은혜교회<br/>       
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}