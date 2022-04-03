import React, { Component } from 'react';
import '../styles/EMPS.css';
import SermonAudio from './SermonAudio';


export default class EMPS extends Component {
    state = {
        sermonAudioClicked: false,
        clickedDate: '',
        videoAttachmentExist: false,
        videoAttachmentUrl: '',
        isVideoSermon: false,
        isEMPS: false
    }

    sermonClicked = (date) => {
        this.setState({
            sermonAudioClicked: !this.state.sermonAudioClicked,
            clickedDate: date,
            videoAttachmentExist: false,
            isEMPS: true
        });
    }

    sermonClickedVideoRef = (date, url) => {
        this.setState({
            videoAttachmentExist: true,
            videoAttachmentUrl: url,
            sermonAudioClicked: !this.state.sermonAudioClicked,
            clickedDate: date,
        });
    }

    sermonPopupClose = () => {
        this.setState({
            sermonAudioClicked: !this.state.sermonAudioClicked,
        });
    }
    
    render() {
        console.log(this.state.isVideoSermon);
        // const imagePath = (date) => require('../images/sermonImages/' + date + '.png');
        return(
            <div>
                <div data-aos="fade-down" data-aos-duration="1500" className="EMPS-banner">
                    
                    <p>태초에 말씀이 계시니라<br/>이 말씀이 하나님과 함께 계셨으니<br/>이 말씀은 곧 하나님이시니라</p>
                    
                </div>
               
                <div className="EMPS-table-container">
                    <table>
                        <tr>
                            <th>날짜</th>
                            <th>제목</th>
                            <th></th>
                        </tr>
                        <tr><td>4/10/2020</td><td>예수님의 분별 5 예배</td><td onClick={() => this.sermonClicked('20200410')} style={{textAlign: 'right', paddingRight: '1em'}}><button>듣기</button></td></tr>
                        <tr><td>4/9/2020</td><td>예수님의 분별 4 메시야</td><td onClick={() => this.sermonClicked('20200409')} style={{textAlign: 'right', paddingRight: '1em'}}><button>듣기</button></td></tr>
                        <tr><td>4/8/2020</td><td>예수님의 분별 3 믿음</td><td onClick={() => this.sermonClicked('20200408')} style={{textAlign: 'right', paddingRight: '1em'}}><button>듣기</button></td></tr>
                        <tr><td>4/7/2020</td><td>예수님의 분별 2 의인</td><td onClick={() => this.sermonClicked('20200407')} style={{textAlign: 'right', paddingRight: '1em'}}><button>듣기</button></td></tr>
                        <tr><td>4/6/2020</td><td>예수님의 분별 1 거룩</td><td onClick={() => this.sermonClicked('20200406')} style={{textAlign: 'right', paddingRight: '1em'}}><button>듣기</button></td></tr>
                        
                        
                    </table>
                </div>
                
                {this.state.sermonAudioClicked ? <SermonAudio isVideoSermon={this.state.isVideoSermon} sermonPopupClose={this.sermonPopupClose} clickedDate={this.state.clickedDate} videoAttachmentExist={this.state.videoAttachmentExist} videoAttachmentUrl={this.state.videoAttachmentUrl} isEMPS={this.state.isEMPS}/> : null }


                {/*lists of old sermons, TODO: add 'display more' functionality and add categories*/}

            </div>

            
        )
    }
}