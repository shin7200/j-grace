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
            swipeToSlide: true,
        }
        return(
            <div data-aos="fade-down" data-aos-duration="1500">
                <Slider {...sliderSettings}>

                <div className="carousel-three-image">
                    <div className="carousel-three">
                        <div className="carousel-three-container"> 
                            <div className="carousel-three-title">금요 HOPE 지성소 기도회</div>
                            <div className="carousel-three-subtitle">
                                <span>
                                    주여 이제 내가 무엇을 바라리요 <br className="carousel-three-subtitle-breakpoint"/>나의 소망은 주께 있나이다
                                </span>
                                <span>
                                    But now, Lord, what do I look for? <br className="carousel-three-subtitle-breakpoint"/>My hope is in you
                                </span>
                                <span>[시편39:7]</span>
                            </div>
                            <ul>
                                <li><b>일시</b>: 10/9 (금) 8PM [매주 금요일]</li>
                                <li><b>장소</b>: 주은혜교회 기도의 집[HOPE] #203-931 brunette Ave. Coquitlam</li>
                                <li><b>말씀</b>: 사도행전 </li>
                            </ul>
                            <div>Teams App을 사용하시는 주은혜 가족분들은 실시간 화상기도회를  드리실 수 있습니다.</div>
                        </div>
                    </div>
                </div> 

                <div className="carousel-two-image">
                    <div className="carousel-two">
                        <div className="carousel-two-title">
                            <p className="carousel-two-title-top">10/4 주일예배</p>
                            <p>   
                                다시 복음 앞에 5<br/>                             
                                New Blessing
                            </p>                                
                        </div>
                        <div className="carousel-two-subtitle">
                            <span>누가복음 6장 20-26절</span><br />
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

                {/* <div className="carousel-three-image">
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
                </div> */}



                
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
                {this.state.sermonAudioClicked ? <Sermon sermonPopupClose={this.buttonClicked} clickedDate={'20201004'} /> : null }
            {/* {this.state.carouselPopup ? <SermonPopup clickedDate={'20190908'} popupClose={this.popupClose} /> : null} */}
            </div>
        )
    }
}