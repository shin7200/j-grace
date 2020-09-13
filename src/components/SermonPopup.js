import React, { Component } from 'react';
import '../styles/sermonPopup.css';
import SermonLogo from '../images/sermonImages/sermonAudioLogo.png';

export default class SermonPopup extends Component {
    state = {
        showVideoAttachment: false,
    }

    videoAttachmentClicked = () => {
        this.setState({ showVideoAttachment: !this.state.showVideoAttachment })
    }

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
            20200913: "2sj3u8Lc0_o"
        }
        var video = false;
        var link;        
        var dateArray = [];
        var date = this.props.clickedDate;
        var year = date.substr(0, 4);        
        var month = date[4] === '0' ? date[5] : date[4] + date[5];
        var day = date[6] === '0' ? date[7] : date[6] + date[7];
        dateArray.push(year, month, day);

        var videoAttachmentExist = this.props.videoAttachmentExist;
        var videoAttachmentUrl = this.props.videoAttachmentUrl;
        var isEMPS = this.props.isEMPS;

        if (parseInt(date) >= 20200322 && !isEMPS && parseInt(date) != 20200410) {
            video = true;
            link = dateLinkObj[date];
        }
        
        
        return(
            <div className="sermon-popup">                                             
                {video ? 
                    (
                    <div className="sermon-video-popup-container">
                        <button onClick={() => this.props.sermonPopupClose()} type="button" className="sermon-video-close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button><br/>

                        <iframe width="100%" height="300" src={`https://www.youtube.com/embed/${link}`} frameborder="0" 
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen"></iframe>
                    </div>
                    ) 
                    : 
                    (
                    <div className="sermon-popup-container">
                        <button onClick={() => this.props.sermonPopupClose()} type="button" className="sermon-close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>   


                        
                        {this.state.showVideoAttachment ? (<iframe width="100%" height="300" src={videoAttachmentUrl} frameborder="0" 
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen"></iframe>) : null}


                        
                        {isEMPS ? 
                        (   <div>
                            <div style={{display: 'flex', width: '100%'}}>
                                <img src={SermonLogo} />
                                <p>{dateArray[1]}월 {dateArray[2]}일 새벽예배({dateArray[0]})<br/> {videoAttachmentExist ? (<button className="sermonVideoRefButton" onClick={() => this.videoAttachmentClicked()}>첨부 동영상 보기</button>) : null}</p>
                            </div>
                            <audio style={{outline: 'none'}} controls>
                                <source src={`https://j-grace.s3-us-west-2.amazonaws.com/EMPS/${date}EMPS.mp3`} type="audio/mp3" />
                            </audio>
                            </div>
                        )
                        :
                        (
                            <div>

                                <div style={{display: 'flex', width: '100%'}}>
                                    
                                    <img src={SermonLogo} />
                                    <p>{dateArray[1]}월 {dateArray[2]}일 말씀({dateArray[0]})<br/> 
                                    {parseInt(date) == 20200410 ? 
                                    (
                                        <a className="sermonVideoRefButton" href="https://j-grace.s3-us-west-2.amazonaws.com/20200410guideline.pdf" target="_blank">안내 순서 보기</a>
                                    ) : null}
                                    {videoAttachmentExist ? (<button className="sermonVideoRefButton" onClick={() => this.videoAttachmentClicked()}>첨부 동영상 보기</button>) : null}
                                    </p>
                                </div>

                                <audio style={{outline: 'none'}} controls>
                                    <source src={`https://j-grace.s3-us-west-2.amazonaws.com/${date}.mp3`} type="audio/mp3" />
                                </audio>
                            </div>
                        )
                        }

                    </div>
                    )
                }               
            </div>
        )
    }
}
