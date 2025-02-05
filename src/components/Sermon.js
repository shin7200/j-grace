import React, { Component } from "react";
import "../styles/sermon.css";
import SermonVideo from "./SermonVideo";
import SermonAudio from "./SermonAudio";
import SermonConfirmPopup from "./SermonConfirmPopup";

export default class Sermon extends Component {
  state = {
    sermonClicked: false,
    confirmVideoClicked: false,
    confirmAudioClicked: false,
    clickedDate: "",
    videoAttachmentExist: false,
    videoAttachmentUrl: "",
    confirmState: "",
    selectedYear: "2022",
  };

  setDate = (date) => {
    this.setState({
      clickedDate: date,
    });
  };

  setVideoRef = (url) => {
    this.setState({
      videoAttachmentExist: true,
      videoAttachmentUrl: url,
    });
  };

  confirmVideoClicked = () => {
    this.setState({
      sermonClicked: false,
      confirmVideoClicked: !this.state.confirmVideoClicked,
    });
  };

  confirmAudioClicked = () => {
    this.setState({
      sermonClicked: false,
      confirmAudioClicked: !this.state.confirmAudioClicked,
    });
  };

  sermonClicked = () => {
    this.setState({
      sermonClicked: !this.state.sermonClicked,
    });
  };

  sermonPopupClose = () => {
    this.setState({
      confirmVideoClicked: false,
      confirmAudioClicked: false,
      videoAttachmentExist: false,
      videoAttachmentUrl: "",
    });
  };

  sermonConfimPopupClose = () => {
    this.setState({
      sermonClicked: !this.state.sermonClicked,
    });
  };

  setSelectedYear = (year) => {
    this.setState({
      selectedYear: year,
    });
  };

  render() {
    const imagePath = (date) => `https://j-grace.s3-us-west-2.amazonaws.com/sermonImages/${date}.png`;

    return (
      <div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="sermon-banner"
        >
          <p>
            태초에 말씀이 계시니라
            <br />이 말씀이 하나님과 함께 계셨으니
            <br />이 말씀은 곧 하나님이시니라
          </p>
        </div>
        <div className="sermon-container">
          <div className="sermon-header-container">
            <h1>설교말씀</h1>
            <div className="sermon-tab-year-container">
              <span
                className="sermon-tab-year"
                onClick={() => this.setSelectedYear("2022")}
                style={
                  this.state.selectedYear === "2022"
                    ? { borderLeft: "5px solid #E67E22" }
                    : {}
                }
              >
                2022
              </span>
              <span
                className="sermon-tab-year"
                onClick={() => this.setSelectedYear("2021")}
                style={
                  this.state.selectedYear === "2021"
                    ? { borderLeft: "5px solid #E67E22" }
                    : {}
                }
              >
                2021
              </span>
              <span
                className="sermon-tab-year"
                onClick={() => this.setSelectedYear("2020")}
                style={
                  this.state.selectedYear === "2020"
                    ? { borderLeft: "5px solid #E67E22" }
                    : {}
                }
              >
                2020
              </span>
              <span
                className="sermon-tab-year"
                onClick={() => this.setSelectedYear("2019")}
                style={
                  this.state.selectedYear === "2019"
                    ? { borderLeft: "5px solid #E67E22" }
                    : {}
                }
              >
                2019
              </span>
            </div>
          </div>

          <table className="sermon-lists">
            <tbody>
              <tr>
                {this.state.selectedYear === "2022" && (
                  <>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220904");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220904")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220828");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220828")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220821");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220821")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220814");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220814")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220807");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220807")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220731");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220731")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220703");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220703")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220626");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220626")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220619");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220619")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220612");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220612")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220605");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220605")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220529");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220529")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220522");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220522")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220515");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220515")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220508");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220508")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220501");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220501")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220424");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220424")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220417");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220417")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220410");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220410")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220403");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220403")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220327");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220327")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220320");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220320")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220313");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220313")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220306");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220306")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220227");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220227")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220220");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220220")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220213");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220213")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220206");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220206")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220130");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220130")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220123");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220123")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220116");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220116")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220109");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220109")})`,
                      }}
                    >
                    </th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20220102");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20220102")})`,
                      }}
                    >
                    </th>

                  </>
                )}
                {this.state.selectedYear === "2021" && (
                  <>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211231");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211231")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211226");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211226")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211219");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211219")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211212");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211212")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211205");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211205")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211128");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211128")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211121");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211121")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211114");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211114")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211107");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211107")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211031");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211031")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211024");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211024")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211017");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211017")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211010");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211010")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20211003");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20211003")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210926");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210926")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210919");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210919")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210905");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210905")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210829");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210829")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210822");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210822")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210815");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210815")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210808");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210808")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210801");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210801")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210725");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210725")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210718");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210718")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210711");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210711")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20210704");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210704")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210627");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210627")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210620");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210620")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210613");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210613")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210606");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210606")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210530");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210530")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210523");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210523")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210516");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210516")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210509");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210509")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210502");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210502")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210425");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210425")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210418");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210418")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210411");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210411")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210404");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210404")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210328");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210328")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210321");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210321")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210314");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210314")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210307");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210307")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210228");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210228")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210221");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210221")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210214");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210214")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210207");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210207")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210131");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210131")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210124");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210124")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210117");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210117")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210110");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210110")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20210103");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20210103")})`,
                      }}
                    ></th>
                  </>
                )}

                {this.state.selectedYear === "2020" && (
                  <>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201231");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201231")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20201227");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201227")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20201220");
                        this.setVideoRef(
                          "https://www.youtube.com/embed/DwPcxfqOJpQ"
                        );
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201220")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20201213");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201213")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20201206");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201206")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.sermonClicked();
                        this.setDate("20201129");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201129")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201122");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201122")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201115");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201115")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201108");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201108")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201101");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201101")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201025");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201025")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201018");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201018")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201011");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201011")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20201004");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20201004")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200927");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200927")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200920");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200920")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200913");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200913")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200906");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200906")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200830");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200830")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200823");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200823")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200816");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200816")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200809");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200809")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200802");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200802")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200726");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200726")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200719");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200719")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200712");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200712")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200705");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200705")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200628");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200628")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200621");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200621")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200614");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200614")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200607");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200607")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200531");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200531")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200524");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200524")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200517");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200517")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200510");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200510")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200503");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200503")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200426");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200426")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200419");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200419")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200412");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200412")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200410");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200410")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200405");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200405")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200329");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200329")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmVideoClicked();
                        this.setDate("20200322");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200322")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200315");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200315")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200308");
                        this.setVideoRef(
                          "https://www.youtube.com/embed/eMkhV4urlz4"
                        );
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200308")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200301");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200301")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200223");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200223")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200216");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200216")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200209");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200209")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200202");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200202")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200126");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200126")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200119");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200119")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20200112");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20200112")})`,
                      }}
                    ></th>
                  </>
                )}

                {this.state.selectedYear === "2019" && (
                  <>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191231");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191231")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191229");
                        this.setVideoRef(
                          "https://www.youtube.com/embed/bEFlRZtesh8"
                        );
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191229")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191215");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191215")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191208");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191208")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191201");
                        this.setVideoRef(
                          "https://www.youtube.com/embed/HQUM0l8cT4Q"
                        );
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191201")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191117");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191117")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191110");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191110")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191103");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191103")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191027");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191027")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191020");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191020")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191013");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191013")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20191006");
                        this.setVideoRef(
                          "https://www.youtube.com/embed/l1WSfsm2KSs"
                        );
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20191006")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20190929");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20190929")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20190922");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20190922")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20190915");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20190915")})`,
                      }}
                    ></th>
                    {/* <th onClick={() => this.setDate('20190908')} style={{backgroundImage: `url(${imagePath('20190908')})`}}></th> */}
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20190901");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20190901")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20190818");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20190818")})`,
                      }}
                    ></th>
                    <th
                      onClick={() => {
                        this.confirmAudioClicked();
                        this.setDate("20190811");
                      }}
                      style={{
                        backgroundImage: `url(${imagePath("20190811")})`,
                      }}
                    ></th>
                  </>
                )}
              </tr>
            </tbody>
          </table>
        </div>
        {this.state.sermonClicked && (
          <SermonConfirmPopup
            onClose={this.sermonConfimPopupClose}
            onConfirmVideo={this.confirmVideoClicked}
            onConfirmAudio={this.confirmAudioClicked}
          />
        )}

        {this.state.confirmVideoClicked && (
          <SermonVideo
            sermonPopupClose={this.sermonPopupClose}
            clickedDate={this.state.clickedDate}
          />
        )}

        {this.state.confirmAudioClicked && (
          <SermonAudio
            onClose={this.sermonPopupClose}
            clickedDate={this.state.clickedDate}
            videoAttachmentExist={this.state.videoAttachmentExist}
            videoAttachmentUrl={this.state.videoAttachmentUrl}
          />
        )}

        {/*lists of old sermons, TODO: add 'display more' functionality and add categories*/}
      </div>
    );
  }
}
