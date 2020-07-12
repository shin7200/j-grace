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
                        <div className="left">
                            <h4>베품의 즐거움으로 서로 돌아보며 위로해 주세요(롬12:8)<br/>Acts of mercy, with cheerfulness</h4>
                            <p>코로나 바이러스 때문에 함께 예배로 모이지 못하는 동안 주은혜가족들에게 기도와 문자등으로 서로 돌아보고 위로해 주세요</p>
                        </div>
                        <div className="right">
                        <p>3월16일부터 BC주 정부에서 50명 이상의 모임을 전면 금지하였습니다. 이로인해 주은혜교회 예배와 모임에 대한 변화에 대해서 안내해 드립니다.</p>
                        <hr style={{backgroundColor: "#fff"}}/>
                        <p>1. 주일예배는 홈페이지(j-grace.org)를 통하여 영상예배로 진행됩니다. 
                           가족들이 함께 컴퓨터나 TV 화면을 연결하여 주일예배시간에 함께 정성스러운 마음을 모아 예배드리시기 바랍니다.
                        </p>
                        <p>2. 이메일헌금(e-Transfer) 계정이 만들어져 있습니다.<br/>
                            -주은혜교회 이메일헌금주소: offering@j-grace.org<br/>
                            -메모난(memo)에 헌금하시는 분의 이름, 헌금번호, 헌금종류와 액수를 적어주세요. 만약 헌금번호가 없다면 본인의 주소와 전화번호를 써넣어주시기 바랍니다.<br/> 
                            -비밀번호(security information)는 되도록 jgrace로 설정해 주시고, 만약 다른 비밀번호로 설정하셨으면 주은혜교회 헌금이메일(offering@j-grace.org)로 보내주세요
                        </p>
                        <p>3. 지금 COVID-19으로 사회적 거리를 두는 안타까움은 있지만 이 시기에 하나님과의 친밀함이 다니엘과 같이 깊어지는 뜻을 정한 시간이 되시길 바라고 특별히 다니엘과 세친구처럼 마음을 같이 하는 기도와 나눔이 주은혜 가족분들안에 있는 시간되시길 소원합니다.
                        </p>
                        {/* <h4>성금요예배 안내</h4>
                        <hr style={{backgroundColor: "#fff"}}/>
                        <p>주님안에서 사랑하는 주은혜 가족분들께 문안드립니다. 고난주간은 잘보내고 계신지요? 주은혜교회가 시작되고 처음으로 맞이하는 성금요예배(Good Friday)입니다.</p>
                        <p>아쉽게도 코로나 19로 인하여 함께 모여서 예배를 드릴 수 없게 되었습니다. 그래서 각 가정별로 성금요예배를 드릴 수 있도록 가정별 성금요예배 안내지와 음성예배를 안내드립니다. 참고하셔서 가정별로 예배를 드리시면 좋겠습니다.</p>
                        <p>그리고 가정별로 가장이 예배를 인도하시고 성찬식까지 함께 할 수 있도록 교회에서 기도하고 성찬빵과 포도주스를 제이센터 사무실에 준비해 놓았습니다. 내일 오전부터 제이센터가 오픈되어 있으니 각 가정별로 오셔서 가져가시면 감사하겠습니다.</p>
                        <p>예배는 배너 혹은 주일 설교말씀 메뉴를 이용해주세요.</p> */}
                        
                        <div className="bottom">
                            <img src={Logo} style={{width: '35px', height: '35px', marginRight: '10px'}}/>
                             주은혜교회<br/>       
                             <button style={{float: 'none'}} onClick={() => this.props.popupClose()} type="button" className="sermon-video-close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>     
                         </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}