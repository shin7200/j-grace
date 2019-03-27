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
                    <p>1. 주은혜교회가 시작되는 것이 하나님께 기쁨이 되고 음부의 권세가 이기지 못하므로 지역을 기쁘게 하는 소식이 되게 하소서</p>
                    <p>2. 하나님이 주시는 꿈과 소망으로 가슴뛰는 지체들이 함께 동역하게 하소서</p>
                    <p>3. 주은혜교회안에 세상이 주는 즐거움과 비교할 수 없는 성령 충만함의 은혜와 영원한 즐거움이 가득한 기쁨의 공동체 하소서</p>
                    <p>4. 밴쿠버의 많은 사람들을 하나님께로 돌아오게 하고 무너진 관계와 깨어진 관계가 주의 은혜로 회복되게 하는 가족공동체 되게 하소서</p>
                    <p>5. 예배와 모임마다 주님의 임재와 영광을 체험하고 주께 힘을 얻고 그 마음에 시온의 대로가 열리는 예배공동체 되게 하소서</p>
                    <p>6. 복음을 통하며 삶이 성숙되고 받는 것보다 나누고 베푸는 천국의 기쁨을 맛보는 나눔공동체 되게 하소서</p>
                    <p>7. 인생의 가장 중요한 가치가 한 사람을 사랑하고 한 사람을 말씀으로 온전히 세우는 것임을 아는 제자공동체 되게 하소서</p>
                </div>
            </div>
        )
    }
}