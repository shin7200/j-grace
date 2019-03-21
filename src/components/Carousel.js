import React, { Component } from 'react';
import '../styles/carousel.css';
import Test from '../images/test.jpeg'
import Test2 from '../images/test2.jpeg'
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
                        <p>첫 예배 안내<br/><br/>4월 21일 1PM<br/></p>
                        <p>장소<br/>......</p>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="image-two"
                    src={Test2}
                    style={{width:'100%', height:'600px'}}
                    />
                    <Carousel.Caption>
                    <h3>Test</h3>
                    <p>test</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Test}
                    style={{width:'100%', height:'600px'}}
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