import React, { Component } from "react";
import "../styles/carousel.css";
import Pdf from "../pdf/2020Mission.pdf";
import Slider from "react-slick";
import Sermon from "./SermonVideo";

export default class Carousel extends Component {
  state = {
    carouselPopup: false,
    pdfPopup: false,
    sermonAudioClicked: false,
  };

  popupClose = () => {
    this.setState({ carouselPopup: false });
  };

  buttonClicked = () => {
    this.setState({ sermonAudioClicked: !this.state.sermonAudioClicked });
  };

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
      arrows: false,
    };
    return (
      <div>
        <Slider {...sliderSettings}>
          <div className="carousel-four-image">
            <div className="carousel-four">
              <span className="carousel-four-title">2021년 신앙 주제</span>
              <span className="carousel-four-content">예레미아 1:9</span>
              <span className="carousel-four-content">
                내 말을 네 입에 두었노라
              </span>
              <span
                className="carousel-four-content"
                style={{ fontSize: "18px", textAlign: "center" }}
              >
                "BEHOLD, I HAVE PUT MY WORDS IN YOUR MOUTH"
              </span>
            </div>
          </div>

          <div className="carousel-two-image">
            <div className="carousel-two">
              <div className="carousel-two-title">
                <p className="carousel-two-title-top">5/16 주일예배</p>
                <p>
                  변화된 삶, 변화된 세상 8<br />
                  주의 손이 함께 하는 바나바
                </p>
              </div>
              <div className="carousel-two-subtitle">
                <span>사도행전 11장 19-26절</span>
                <br />
                <span
                  style={{ borderLeft: "4px solid #fff", paddingLeft: "0.5em" }}
                >
                  송관빈 목사
                </span>
                <br />
                <a href="/#/sermon">예배영상 보기/듣기</a>
              </div>
            </div>
          </div>

          <div className="carousel-three-image">
            <div className="carousel-three">
              <div className="carousel-three-container">
                <div className="carousel-three-title">금요 지성소 기도회</div>
                <div className="carousel-three-subtitle">
                  <span>
                    <br />
                    "주님과의 동행 <br className="carousel-three-subtitle-breakpoint" />그리고 인도하심"
                                </span>

                </div>
                <ul>
                  <li><b>일시</b>: 매주 금요일 8PM</li>
                  <li><b>장소</b>: 주은혜교회 기도의 집[HOPE] / Teams App</li>
                </ul>

              </div>
            </div>
          </div>

          {/* <div className="carousel-three-image">
            <div className="carousel-three">
              <div className="carousel-three-container">
                <div className="carousel-three-title">
                  금요 지성소 기도회
                </div>
                <div className="carousel-three-subtitle">
                  <div
                    className="carousel-three-content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "start",
                    }}
                  >
                    <span>
                      <br />
                      "말씀위의 서는 삶의 양육 첫번째 과정으로 신구약 성경 전체를
                      살펴보는 성경 익스프레스 과정을 매주 금요일 오후 8시
                      금요일 금요 지성소 기도회 시간에 시작할 계획입니다."
                      <br />
                      <br />
                      성경을 통독해가다가 레위기에 좌절하고 마태복음 족보에서
                      좌절하신 분들도 성경 66권의 계시 역사의 큰 물줄기가 어떻게
                      흘러가며 성경 지리 어디에서 언제 펼쳐지는지 입체적으로
                      확인하는 시간이 되시길 바랍니다.
                    </span>
                  </div>
                </div>
                <ul>
                  <li>
                    <b>일시</b>: 매주 금요일 8PM
                  </li>
                  <li>
                    <b>장소</b>: 주은혜교회 HOPE / Teams app
                  </li>
                 
                </ul>
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
                <p className="carousel-one-title-top">
                  <b>e-Transfer 헌금 안내</b>
                </p>
              </div>
              <div className="carousel-one-subtitle">
                <ul>
                  <li className="cos-one">
                    주은혜교회 헌금이메일주소: <br className="space" />
                    offering@j-grace.org
                  </li>
                  <li className="cos-one">
                    메모난(memo)에 헌금하시는 분의 이름, 헌금번호, 헌금종류와
                    액수를 적어주세요. 만약 헌금번호가 없다면 본인의 주소와
                    전화번호를 써넣어주시기 바랍니다.
                  </li>

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
        {/* {this.state.sermonAudioClicked ? <Sermon sermonPopupClose={this.buttonClicked} clickedDate={'20201122'} /> : null } */}
        {/* {this.state.carouselPopup ? <SermonPopup clickedDate={'20190908'} popupClose={this.popupClose} /> : null} */}
      </div>
    );
  }
}
