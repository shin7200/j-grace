import React, { Component } from 'react';
import '../styles/content.css';
import Test from '../images/test.jpeg'
import Test2 from '../images/test2.jpeg'
import Carousel from 'react-bootstrap/Carousel'

export default class Content extends Component {
    render() {
        return(
            <Carousel slide="false" fade="true" pauseOnHover="false" interval={3000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Test}
                    style={{width:'100%', height:'500px'}}
                    />
                    <Carousel.Caption>
                    <h3>Test</h3>
                    <p>test</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Test2}
                    style={{width:'100%', height:'500px'}}
                    />
                    <Carousel.Caption>
                    <h3>Test</h3>
                    <p>test</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Test}
                    style={{width:'100%', height:'500px'}}
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