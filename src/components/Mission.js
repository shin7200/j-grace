import React, { Component } from "react";
import "../styles/mission.css";
import MissionCommunity from "../images/mission.png";

export default class Mission extends Component {
  locationLinkClicked = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <div id="mission" className="outer-mission-container">
        <div className="mission-container">
          <div className="vision-logo-container">
            {/* <i id="cross" className="fas fa-cross"></i> */}
            {/* <i className="fas fa-church"></i> */}
            <i id="hand-heart" className="fas fa-hand-holding-heart"></i>
          </div>
          <div className="vision-statement">
            <h2>Vision Statement</h2>
            <p>A church that transforms homes into Christ-centered families</p>
            <div className="vision-statement-korean">
              <p>
                <b style={{ color: "#E67E22" }}>예수 그리스도</b> 중심의 삶으로
                각 사람을 변화시키는
                <span
                  style={{
                    background: "#E67E22",
                    color: "#333",
                    padding: "0.3em",
                    width: "fit-content",
                  }}
                >
                  가족 공동체 교회
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="mission-community-container"
          style={{ marginTop: "1em", width: "70%" }}
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          {/* <div className="mission-statement">
                        <p>하나님의 은혜와 영광을 경험하는<br/><span>예배 공동체</span></p>
                        <p>복음안에서 삶을 나누고 인생이 성숙해지는<br/><span>셀 공동체</span></p>
                        <p>약속의 말씀에 기쁨으로 순종하는<br/><span>제자 공동체</span></p>
                        <p>하나님 나라의 소원이 이루어지게 하는<br/><span>미션 공동체</span></p>

                    </div> */}
          <img className="mission-image" src={MissionCommunity} alt="mission" />
        </div>
        <div className="outer-service-container">
          <div className="service-liner"></div>
          <p className="service" data-aos="fade-down">
            예배 안내
          </p>
          <div className="service-container">
            <div className="service-time-container" data-aos="fade-down">
              <p className="service-type">
                <type>1부 주일 예배</type>
                <span>매주 일요일 오전 9시</span>
              </p>
              <p className="service-type">
                <type>2부 주일 예배</type>
                <span>매주 일요일 오전 11시</span>
              </p>
              <p className="service-type">
                <type>진리와 자유</type>
                <span>격주 수요일 오후 7시30분</span>
              </p>
              <p className="service-type">
                <type>금요지성소 기도회</type>
                <span>매주 오후 8시</span>
              </p>
            </div>
            <div className="main-page-location-container" data-aos="fade-down">
              <div className="main-page-location">
                <i
                  className="fas fa-map-pin"
                  style={{
                    fontSize: "20px",
                    marginTop: "0.2em",
                    marginRight: "4.75px",
                  }}
                ></i>
                <ul>
                  <li>
                    <b>
                      location (장소){" "}
                      <a onClick={this.locationLinkClicked} href="/#/location">
                        오시는 길
                      </a>
                    </b>
                  </li>
                  {/* <li>Burnaby Hall</li> */}
                  <li>#203 - 931 Brunette Ave | Coquitlam BC</li>
                </ul>
              </div>
              <div className="main-page-email">
                <i
                  className="far fa-envelope email-icon"
                  style={{ fontSize: "16px", marginTop: "0.45em" }}
                ></i>
                <ul>
                  <li>
                    <b>email</b>
                  </li>
                  <li>
                    <a href="mailto:j-gcc.info@j-grace.org">
                      j-gcc.info@j-grace.org
                    </a>
                  </li>
                </ul>
              </div>
              <div className="main-page-phone">
                <i
                  className="fas fa-mobile-alt phone-icon"
                  style={{
                    fontSize: "20px",
                    marginTop: "0.25em",
                    paddingLeft: "0.1em",
                  }}
                ></i>
                <ul>
                  <li>604-961-4711</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="this-month-container">
          <div data-aos="fade-down">
            <div className="this-month-title">
              <p>이번주 말씀과 찬양</p>
            </div>
            <div className="this-month-scripture">
              <b>호세아 11:8-9 새번역</b>
              <p>
                8 에브라임아, 내가 어찌 너를 버리겠느냐? 이스라엘아, 내가 어찌
                너를 원수의 손에 넘기겠느냐? 내가 어찌 너를 아드마처럼 버리며,
                내가 어찌 너를 스보임처럼 만들겠느냐? 너를 버리려고 하여도, 나의
                마음이 허락하지 않는구나! 너를 불쌍히 여기는 애정이 나의 속에서
                불길처럼 강하게 치솟아 오르는구나.
                <br />9 아무리 화가 나도, 화나는 대로 할 수 없구나. 내가 다시는
                에브라임을 멸망시키지 않겠다. 나는 하나님이요, 사람이 아니다.
                나는 너희 가운데 있는 거룩한 하나님이다. 나는 너희를 위협하러 온
                것이 아니다.
              </p>
            </div>
            <div className="this-month-hymn">
              <b>찬양곡</b>
              <p>
                Lord, I need you(몸찬양)
                <br />
                우리들의 싸울 것은(찬350장)
                <br />
                행복
                <br />
                마음속에 근심있는 사람(찬365장)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
