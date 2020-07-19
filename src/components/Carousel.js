import React, { Component } from 'react';
import '../styles/carousel.css';
import Pdf from '../pdf/2020Mission.pdf';
import Slider from 'react-slick';
import Sermon from './SermonPopup'

export default class Carousel extends Component {
    state = {
        carouselPopup: false,
        pdfPopup: false,
        sermonAudioClicked : false
    }

    popupClose = () => {
        this.setState({ carouselPopup: false })
    }

    buttonClicked = () => {
        this.setState({ sermonAudioClicked: !this.state.sermonAudioClicked })
    }



    render() {
        var sliderSettings = {
            lazyLoad: true,
            fade: true,
            dots: true,            
            speed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            arrows: false,
                  
        }
        return(
            <div data-aos="fade-down" data-aos-duration="1500">
                <Slider {...sliderSettings}>

                <div className="carousel-two-image">
                    <div className="carousel-two">
                        <div className="carousel-two-title">
                            <p className="carousel-two-title-top">7/19 주일예배</p>
                            <p>   
                                기름부음의 기도 6<br/>                             
                                응답없는 잘못된 기도
                            </p>                                
                        </div>
                        <div className="carousel-two-subtitle">
                            <span>열왕기상 18장 17-31절</span><br />
                            <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span><br/>
                            <a onClick={() => this.buttonClicked()}>예배영상 보기</a>
                        </div>
                    </div>
                </div>


                {/* <div className="carousel-three-image">
                    <div className="carousel-three">
                        <div className="carousel-three-title">
                            <p className="carousel-three-title-top">4/26 주일예배</p>
                            <p>
                                마지막 때를 준비하는<br/>
                                그루터기
                            </p>
                        </div>
                        <div className="carousel-three-subtitle">                                
                            <span>다니엘 12장</span><br/>
                            <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span><br/>                            
                            <a onClick={() => this.buttonClicked()}>예배영상 보기</a>
                            <br/>
                        </div>
                    </div>
                </div> */}

                <div className="carousel-three-image">
                    <div className="carousel-three">
                        <div className="carousel-three-title">
                            <p style={{marginTop: '3em'}} className="carousel-three-title-top">Microsoft Teams App</p>
                            <p>
                                마이크로소프트 Teams <br/>
                                앱 사용법 안내
                            </p>
                        </div>
                        <div className="carousel-three-subtitle">                                
                            <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>교회 소식을 이용해주세요</span>
                        </div>
                    </div>
                </div>



                
                {/* this carousel has diff css style */}
                <div className="carousel-one-image">
                    <div className="carousel-one">
                        <div className="carousel-one-title">
                            <p className="carousel-one-title-top"><b>e-Transfer 헌금 안내</b></p>
                            
                        </div>
                        <div className="carousel-one-subtitle">                            
                            <ul>
                                <li className="cos-one">주은혜교회 헌금이메일주소: <br className="space"/>offering@j-grace.org</li>
                                <li className="cos-one">메모난(memo)에 헌금하시는 분의 이름, 헌금번호, 헌금종류와 액수를 적어주세요. 만약 헌금번호가 없다면 본인의 주소와 전화번호를 써넣어주시기 바랍니다.</li>
                                <li className="cos-one">비밀번호(security information)는 되도록 jgrace로 설정해 주시고, 만약 다른 비밀번호로 설정하셨으면 주은혜교회 헌금이메일로 보내주세요.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                

                {/* <div className="carousel-three-image">
                    <div className="carousel-three">
                        <div className="carousel-three-title">
                            <p className="carousel-three-title-top">2020년 신앙주제</p>
                            <p>예수 그리스도의 심장으로</p><br/>With the compassion of Christ Jesus
                            
                        </div>
                        <div className="carousel-three-subtitle">
                            <span>빌립보서 1장 8절</span><br />
                            <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span><br/>
                            <a href="/#/sermon">말씀 듣기</a>
                        </div>
                    </div>
                </div>     */}



                    
                    


                    {/* <div className="carousel-two-image">
                        <div className="carousel-two">
                            <div className="carousel-two-title">
                                <p className="carousel-two-title-top" style={{fontSize: '20px'}}>9/8 창립예배영상</p>
                                <p>예수 그리스도의 은혜로 가정이<br />변화되는 가족 공동체 교회</p>
                                
                            </div>
                            <div className="carousel-two-subtitle">
                                <span></span><br />
                                <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>주은혜교회</span><br/>
                                <a href="/#/sermon">영상보기</a>
                            </div>
                        </div>
                    </div> */}

                </Slider>
                {this.state.sermonAudioClicked ? <Sermon sermonPopupClose={this.buttonClicked} clickedDate={'20200719'} /> : null }
            {/* {this.state.carouselPopup ? <SermonPopup clickedDate={'20190908'} popupClose={this.popupClose} /> : null} */}
            </div>
        )
    }
}