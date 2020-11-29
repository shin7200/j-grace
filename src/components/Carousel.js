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
            autoplaySpeed: 6500,
            pauseOnHover: true,            
            swipeToSlide: true,
            arrows: false
        }
        return(
            <div>
                <Slider {...sliderSettings}>

                <div className="carousel-two-image">
                    <div className="carousel-two">
                        <div className="carousel-two-title">
                            <p className="carousel-two-title-top">11/22 주일예배</p>
                            <p>   
                                다시 복음 앞에 12<br/>                             
                                반응없는 세대
                            </p>                                
                        </div>
                        <div className="carousel-two-subtitle">
                            <span>누가복음 7장 31-35절</span><br />
                            <span style={{borderLeft: '4px solid #fff', paddingLeft: '0.5em'}}>송관빈 목사</span><br/>
                            <a onClick={() => this.buttonClicked()}>예배영상 보기</a>
                        </div>
                    </div>
                </div>

                {/* <div className="carousel-three-image">
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
                                <li><b>일시</b>: 매주 금요일</li>
                                <li><b>장소</b>: 주은혜교회 기도의 집[HOPE] #203-931 brunette Ave. Coquitlam</li>
                                <li><b>말씀</b>: 사도행전</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>  */}

                <div className="carousel-three-image">
                    <div className="carousel-three">
                        <div className="carousel-three-container"> 
                            <div className="carousel-three-title">성경 익스프레스 Bible Express</div>
                            <div className="carousel-three-subtitle">
                                <div className="carousel-three-content" style={{display: 'flex', flexDirection: 'column', textAlign: 'start'}}>
                                    <span>
                                        <br />                                    
                                        말씀위의 서는 삶의 양육 첫번째 과정으로 신구약 성경 전체를 살펴보는 성경 익스프레스 과정을 매주 금요일 오후 8시 금요일 금요 지성소 기도회 시간에 시작할 계획입니다.<br/><br/>
                                        성경을 통독해가다가 레위기에 좌절하고 마태복음 족보에서 좌절하신 분들도 성경 66권의 계시 역사의 큰 물줄기가 어떻게 흘러가며 성경 지리 어디에서 언제 펼쳐지는지 입체적으로 확인하는 시간이 되시길 바랍니다. 
                                    </span>                                                                
                                </div>
                            </div>
                            <ul>
                                <li><b>일시</b>: 매주 금요일</li>
                                <li><b>장소</b>: Teams 온라인 미팅</li>
                                <li><b>말씀</b>: 신약 전체</li>
                            </ul>
                            
                        </div>
                    </div>
                </div> 
               

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
                {this.state.sermonAudioClicked ? <Sermon sermonPopupClose={this.buttonClicked} clickedDate={'20201122'} /> : null }
            {/* {this.state.carouselPopup ? <SermonPopup clickedDate={'20190908'} popupClose={this.popupClose} /> : null} */}
            </div>
        )
    }
}