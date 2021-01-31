import React, { Component } from "react";
import "../styles/sermonPopup.css";
import SermonLogo from "../images/sermonImages/sermonAudioLogo.png";

export default class SermonVideo extends Component {
  state = {
    showVideoAttachment: false,
  };

  videoAttachmentClicked = () => {
    this.setState({ showVideoAttachment: !this.state.showVideoAttachment });
  };

  render() {
    var dateLinkObj = {
      20200322: "Sn42W8dxdt8",
      20200329: "wWPh_w7nW-8",
      20200405: "nwGAoYHUZWM",
      20200412: "3VnG1iy2qCU",
      20200419: "ZyMbzqgKI4o",
      20200426: "ryvKaZu6fiU",
      20200503: "DIpoIQAMrCU",
      20200510: "-rjg45HfwrE",
      20200517: "E35iTTv8Uhs",
      20200524: "A46PqvcXn-0",
      20200531: "MaiVLQfTZw8",
      20200607: "1BXlsgUd6T0",
      20200614: "zWvDEKGBnQc",
      20200621: "qWD2dO6jEzE",
      20200628: "75EOmNKFCbE",
      20200705: "6KV5A3RDi2k",
      20200712: "i9g_u0fKfRk",
      20200719: "lttnwiQmylg",
      20200726: "X3vHi0SdbFo",
      20200802: "XyHzXtw4u2c",
      20200809: "EUO6tE8WgbI",
      20200816: "9CjXenaxSKo",
      20200823: "8wCxheGLio4",
      20200830: "0we_fhbF6xs",
      20200906: "GtRRvamDbbA",
      20200913: "2sj3u8Lc0_o",
      20200920: "mB5MD0AQ9x0",
      20200927: "BDKP5oT2Q6w",
      20201004: "AFd-Z5i7L4U",
      20201011: "vaCR5Y5qjTQ",
      20201018: "dlVC3ZlgrpM",
      20201025: "IqUpm6Dqbis",
      20201101: "XVKXnht_vm4",
      20201108: "W6f-6JJ7fhY",
      20201115: "IkUcSEFyt1g",
      20201122: "ernTPfzQmi8",
      20201129: "Au_JEvMtfc8",
      20201206: "wnqz6_N4TYE",
      20201213: "RsuL-8Lqkf0",
      20201220: "LKzNc-WzwHA",
      20201227: "Vm4V8dk1T2U",
      20201231: "DzljobsEjOQ",
      20210103: "YWizIOMOdFo",
      20210110: "xchTSKbhJi4",
      20210117: "9Hb5OJcGoPI",
      20210124: "kTnTSFf2HNM",
    };

    var date = this.props.clickedDate;
    var link = dateLinkObj[date];

    return (
      <div className="sermon-popup">
        <div className="sermon-video-popup-container">
          <button
            onClick={() => this.props.sermonPopupClose()}
            type="button"
            className="sermon-video-close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <br />

          <iframe
            width="100%"
            height="300"
            src={`https://www.youtube.com/embed/${link}`}
            frameborder="0"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </div>
      </div>
    );
  }
}
