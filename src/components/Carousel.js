import React, { Component } from 'react';
import '../styles/carousel.css';
import Test from '../images/test.jpeg'
import Test2 from '../images/test2.jpeg'
import Test3 from '../images/test3.jpeg'
import Carousel from 'react-bootstrap/Carousel'
import CarouselPopup from './CarouselPopup'

export default class Content extends Component {
    state = {
        carouselPopup: false
    }

    popupClose = () => {
        this.setState({ carouselPopup: false })
    }

    render() {
        return(
            <div data-aos="fade-down" data-aos-duration="1500"> 
                <Carousel fade={true} pauseOnHover={false} interval={4000}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        alt="image-one"
                        src={Test}
                        style={{width:'100%', height:'750px', webkitFilter: 'brightness(60%)'}}
                        />
                        <Carousel.Caption>
                        <div className="carousel-one">
                            <div className="carousel-one-title">
                                <span>그레이스교회 7번째 개척교회</span>
                            </div>
                            <div className="carousel-one-subtitle">
                                <span>4월 21일 부활주일부터</span><br/>
                                <span>1시에 첫 예배를 드립니다</span>
                            </div>
                            <div className="carousel-one-content">
                                <p>장소<br/>7837 Canada Way</p>
                                <a href="/location">오시는 길</a>
                            </div>
                            
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="image-two"
                        src={Test2}
                        style={{width:'100%', height:'750px', webkitFilter: 'brightness(60%)'}}
                        />
                        <Carousel.Caption>
                        <div className="carousel-two">
                            <div className="carousel-two-title">
                                <p>주은혜교회</p>
                                <p>7 가지 기도제목</p>
                                <div className="carousel-two-scripture">
                                    <p className="carousel-two-top-scripture">골로새서 4:2<br/></p>
                                    <p>기도를 계속하고 기도에 감사함으로 깨어 있으라</p>
                                </div>
                            </div>
                            <div className="carousel-two-subtitle">
                                <p onClick={()=> this.setState({ carouselPopup: true })}>기도제목 보기</p>
                            </div>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Test3}
                        style={{width:'100%', height:'750px'}}
                        />
                        <Carousel.Caption>
                        <h3>Test</h3>
                        <p>test</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
                {this.state.carouselPopup ? <CarouselPopup popupClose={this.popupClose} /> : null}
            </div>
        )
    }
}