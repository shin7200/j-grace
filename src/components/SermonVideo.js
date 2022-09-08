import React, { Component } from "react";
import "../styles/sermonPopup.css";


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
      20210131: "HNrtYBMu6yk",
      20210207: "mCy6AcnFO-c",
      20210214: "F6UZdnVps0Q",
      20210221: "coXvlsWUApE",
      20210228: "FSOnVyUwMJU",
      20210307: "pohoA51Vmu4",
      20210314: "GmgMzKs6308",
      20210321: "OI7S03Hkv3c",
      20210328: "7kPxDcAU0Pk",
      20210404: "ulEkfFzUchI",
      20210411: "jftqI4erfV8",
      20210418: "SdwjOPBrgfc",
      20210425: "tIjseM_12lA",
      20210502: "r5vgGddiFlw",
      20210509: "MNbbQdafI5g",
      20210516: "rHo6cuqWr4M",
      20210523: "kID1uReU_rk",
      20210530: "ES5KgbpsdM4",
      20210606: "2khQnVK5oxY",
      20210613: "Bw03Xk3BgXc",
      20210620: "PW1zDH1JxrA",
      20210627: "UGT8xUtB-KU",
      20210704: "LKgegxTkQys",
      20210711: "wWJYSCGey88",
      20210718: "QIwi7Fql96I",
      20210725: "E2TYfNMy7Vg",
      20210801: "PnXzpojpn14",
      20210808: "hUmie0PT-6U",
      20210815: "liApDGDxC7c",
      20210822: "K_VKUbqGJKc",
      20210829: "s1gIOnvMA94",
      20210905: "8JuloajjB7Y",
      20210919: "CJE0GPKpnEs",
      20210926: "SgtTmvRqLDA",
      20211003: "10wgKC0BAj8",
      20211010: "Vi-fCq6laLI",
      20211017: "DJAyCLpOUY0",
      20211024: "Jw0FoNkbJDQ",
      20211031: "Vm7HtY6SRSg",
      20211107: "e4CcSKqYjl0",
      20211114: "3f2vik6-QXs",
      20211121: "FiYwZwUm53Y",
      20211128: "fhWhvb8TBqA",
      20211205: "FwyygOGzlp4",
      20211212: "jeWsJpzedxA",
      20211219: "NJBpdcdUkVE",
      20211226: "Zidym31ZkHc",
      20211231: "uTDHa3w6plE",
      20220102: "QnMK08bKwQI",
      20220109: "ea682FY4gIw",
      20220116: "WgFW_5e5MBI",
      20220123: "Uur8sjmHPoI",
      20220130: "3h-7fEg0gGg",
      20220206: "ZyGkm8BB7cU",
      20220213: "lwzAchwb5n8",
      20220220: "qhkA6YEIOfs",
      20220227: "VSMWfkqRJFI",
      20220306: "Gs0H2doakrM",
      20220313: "l2ikv9JF0zE",
      20220320: "BGhtvlLDhfI",
      20220327: "Qc33pmGur6g",
      20220403: "VbFELwibylo",
      20220410: "nZTa-7-X5fA",
      20220417: "yQfUX0flvV4",
      20220424: "-tV7EmC9VnM",
      20220501: "QnM9X4ZhI4Q",
      20220508: "oq6LSU3Ww5o",
      20220515: "-5sodwqArsQ",
      20220522: "weJ-eJCPpWI",
      20220529: "tSVWIalQV78",
      20220605: "D-OB5yw7jQA",
      20220612: "_yr27O5j8Wc",
      20220619: "KZKgaYRL1kk",
      20220626: "HPIME_34YXc",
      20220703: "5ZluQgRemz4",
      20220731: "IyAG_SDp9qY",
      20220807: "xW96mtbLJYk",
      20220814: "Ljb4SXq9mi4",
      20220821: "FfsFTsvdf9w",
      20220828: "8If0OK-Vjlo",
      20220904: "1Ok_hB4OdOM",

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
            allow="fullscreen;"
          ></iframe>
        </div>
      </div>
    );
  }
}
