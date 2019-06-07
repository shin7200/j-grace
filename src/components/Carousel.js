import React, { Component } from 'react';
import '../styles/carousel.css';
// import CarouselOne from '../images/carouselOne.jpeg'
// import CarouselTwo from '../images/carouselTwo.jpeg'
// import Test3 from '../images/test3.jpeg'
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
            <div>
                <div data-aos="fade-down" data-aos-duration="1500">
                    {/* <a href="#mission"><i style={{top: '13em', zIndex: '2', color: '#fff'}} className="fas fa-chevron-down"></i></a> */}
                    <Carousel fade={true} pauseOnHover={false} interval={4500}>
                        
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-one-image"
                            alt="image-one"
                            style={{width:'100%', height:'750px', WebkitFilter: 'brightness(70%)'}}
                            >
                            </div>
                            <Carousel.Caption>
                            <div className="carousel-one">
                                <div className="carousel-one-title">
                                    <p className="carousel-one-title-top" style={{fontSize: '20px'}}>주일예배</p>
                                    <p>생수의 강 시리즈 2<br/>진리의 강</p>
                                </div>
                                <div className="carousel-one-subtitle">
                                    <span>요한복음 4장 14절</span><br/><br/>
                                    <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-three-image"
                            alt="image-one"
                            style={{width:'100%', height:'750px', WebkitFilter: 'brightness(50%)'}}
                            >
                            </div>
                            <Carousel.Caption>
                            <div className="carousel-three" style={{fontFamily: 'Gamja Flower, cursive'}}>
                                <div className="carousel-three-title">
                                    <b style={{paddingLeft: '0.5em'}}>주은혜가족 야외예배 !</b>
                                </div>
                                <div className="carousel-three-subtitle">
                                    <p>
                                        <span>주제</span> 주안에 우린 하나<br/>
                                        <span>대상</span> 모든 주은혜교회 교우 <linebreak>및 초청대상자</linebreak><br/>
                                        <span>일시</span> 6/2 주일 11 AM<br/>
                                        <span>장소</span> Mundy Park Picnic Shelter <linebreak>(587 Hilcrest St)</linebreak>
                                    </p>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-two-image"
                            src="image-two"
                            style={{width:'100%', height:'750px', WebkitFilter: 'brightness(60%)'}}
                            >
                            </div>
                            <Carousel.Caption>
                            <div className="carousel-two">
                                <div className="carousel-two-title">
                                    <b>주은혜교회</b><br/>
                                    <b>7 가지 기도제목</b>
                                </div>
                                <div className="carousel-two-subtitle">
                                    <p className="carousel-two-top-subtitle">골로새서 4:2<br/></p>
                                    <p>기도를 계속하고 기도에 감사함으로 깨어 있으라</p>
                                </div>
                                
                                <div className="carousel-two-button">
                                    <p onClick={()=> this.setState({ carouselPopup: true })}>기도제목 보기</p>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    
                </div>
            {this.state.carouselPopup ? <CarouselPopup popupClose={this.popupClose} /> : null}
            </div>
        )
    }
}