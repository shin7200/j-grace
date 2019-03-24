import React, { Component } from 'react';
import '../styles/carousel.css';
import Test from '../images/test.jpeg'
import Test2 from '../images/test2.jpeg'
import Test3 from '../images/test3.jpeg'
import Carousel from 'react-bootstrap/Carousel'

export default class Content extends Component {
    render() {
        return(
            <Carousel fade={true} pauseOnHover={false} interval={4000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    alt="image-one"
                    src={Test}
                    style={{width:'100%', height:'700px', webkitFilter: 'brightness(60%)'}}
                    />
                    <Carousel.Caption>
                    <div className="carousel-one">
                        <div className="carousel-one-title">
                            <span>그레이스교회 7번째 개척교회</span>
                        </div>
                        <div className="carousel-one-subtitle">
                            <span>4월 21일 부활주일부터</span><br/>
                            <span>첫 예배를 드립니다</span>
                        </div>
                        <div className="carousel-one-content">
                            <span>장소<br/>7837 Canada Way</span><br/>
                            <a href="/location">오시는 길</a>
                        </div>
                        
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="image-two"
                    src={Test2}
                    style={{width:'100%', height:'700px'}}
                    />
                    <Carousel.Caption>
                    <h3>Test</h3>
                    <p>test</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Test3}
                    style={{width:'100%', height:'700px'}}
                    />
                    <Carousel.Caption>
                    <h3>Test</h3>
                    <p>test</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        )
    }
}