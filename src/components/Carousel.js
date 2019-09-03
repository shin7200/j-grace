import React, { Component } from 'react';
import '../styles/carousel.css';
// import CarouselPopup from './CarouselPopup'
import Slider from 'react-slick';

export default class Content extends Component {
    state = {
        carouselPopup: false
    }

    popupClose = () => {
        this.setState({ carouselPopup: false })
    }

    render() {
        var sliderSettings = {
            lazyLoad: true,
            fade: true,
            dots: true,
            infinite: true,
            speed: 3500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6500,
            pauseOnHover: false,
            arrows: false,
            swipeToSlide: true,
        }
        return(
            <div>
                <Slider {...sliderSettings}>
                    <div className="carousel-one-image">
                        <div className="carousel-one">
                            <div className="carousel-one-title">
                                <p className="carousel-one-title-top" style={{fontSize: '20px'}}>8/11 주일예배</p>
                                <p>소망이 회복된 공동체<br className="space" /> 시리즈 1<br/>"야망이냐? 소망이냐?"</p>
                            </div>
                            <div className="carousel-one-subtitle">
                                <span>창세기 37장 5-11절</span><br/>
                                <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-two-image">
                        <div className="carousel-two">
                            <div className="carousel-two-title">
                                <p className="carousel-two-title-top" style={{fontSize: '20px'}}>8/18 주일예배</p>
                                <p>소망이 회복된 공동체<br className="space" /> 시리즈 2<br/>"유혹과 잊혀짐속의 소망"</p>
                            </div>
                            <div className="carousel-two-subtitle">
                                <span>창세기 39장 1-3절</span><br/>
                                <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-three-image">
                        <div className="carousel-three">
                            <div className="carousel-three-title">
                                <p className="carousel-three-title-top" style={{fontSize: '20px'}}>8/25 주일예배</p>
                                <p>소망이 회복된 공동체<br className="space" /> 시리즈 3<br/>"하나님의 타이밍에 회복된 소망"</p>
                            </div>
                            <div className="carousel-three-subtitle">
                                <span>창세기 41장</span><br/>
                                <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>김낙선 목사</span>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* <div data-aos="fade-down" data-aos-duration="2000">
                    <Carousel fade={false} pauseOnHover={false} interval={7000}>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-one-image"
                            alt="image-one"
                            style={{width:'100%', WebkitFilter: 'brightness(80%)'}}
                            >
                            </div>
                            <Carousel.Caption>
                            <div className="carousel-one">
                                <div className="carousel-one-title">
                                    <p className="carousel-one-title-top" style={{fontSize: '20px'}}>주일예배</p>
                                    <p>풍성한 주 은혜<br className="space" /> 시리즈 2<br/>"변화시키는 은혜"</p>
                                </div>
                                <div className="carousel-one-subtitle">
                                    <span>창세기 32장 24-31절</span><br/>
                                    <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span>
                                </div>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            {this.state.carouselPopup ? <CarouselPopup popupClose={this.popupClose} /> : null} */}
            </div>
        )
    }
}