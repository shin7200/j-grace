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
                    style={{width:'100%', height:'700px'}}
                    />
                    <Carousel.Caption>
                    <div className="carousel-one">
                        <h1>그레이스교회에서 7번째 <br/>분립개척하는 주은혜교회가<br/>2019년 4월 21일 부활주일부터 시작합니다<br/><br/><p>장소<br/>7837 Canada Way</p></h1>
                        
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
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
                </Carousel.Item>
            </Carousel>
        )
    }
}