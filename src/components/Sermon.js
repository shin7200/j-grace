import React, { Component } from 'react';
import '../styles/sermon.css';
import SermonAudio from './SermonPopup';


export default class Sermon extends Component {
    state = {
        sermonAudioClicked: false,
        clickedDate: '',
        videoAttachmentExist: false,
        videoAttachmentUrl: '',
        isVideoSermon: false,
    }

    sermonClicked = (date) => {
        this.setState({
            sermonAudioClicked: !this.state.sermonAudioClicked,
            clickedDate: date,
            videoAttachmentExist: false
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
        const imagePath = (date) => require('../images/sermonImages/' + date + '.png');
        return(
            <div>
                <div data-aos="fade-down" data-aos-duration="1500" className="sermon-banner">
                    
                    <p>태초에 말씀이 계시니라<br/>이 말씀이 하나님과 함께 계셨으니<br/>이 말씀은 곧 하나님이시니라</p>
                    
                </div>
                <div className="sermon-container">
                    <h1>설교말씀</h1>
                    <table className="sermon-lists">
                        <tbody>
                            <tr>
                            <th onClick={() => this.sermonClicked('20200913')} style={{backgroundImage: `url(${imagePath('20200913')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200906')} style={{backgroundImage: `url(${imagePath('20200906')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200830')} style={{backgroundImage: `url(${imagePath('20200830')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200823')} style={{backgroundImage: `url(${imagePath('20200823')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200816')} style={{backgroundImage: `url(${imagePath('20200816')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200809')} style={{backgroundImage: `url(${imagePath('20200809')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200802')} style={{backgroundImage: `url(${imagePath('20200802')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200726')} style={{backgroundImage: `url(${imagePath('20200726')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200719')} style={{backgroundImage: `url(${imagePath('20200719')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200712')} style={{backgroundImage: `url(${imagePath('20200712')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200705')} style={{backgroundImage: `url(${imagePath('20200705')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200628')} style={{backgroundImage: `url(${imagePath('20200628')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200621')} style={{backgroundImage: `url(${imagePath('20200621')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200614')} style={{backgroundImage: `url(${imagePath('20200614')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200607')} style={{backgroundImage: `url(${imagePath('20200607')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200531')} style={{backgroundImage: `url(${imagePath('20200531')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200524')} style={{backgroundImage: `url(${imagePath('20200524')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200517')} style={{backgroundImage: `url(${imagePath('20200517')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200510')} style={{backgroundImage: `url(${imagePath('20200510')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200503')} style={{backgroundImage: `url(${imagePath('20200503')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200426')} style={{backgroundImage: `url(${imagePath('20200426')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200419')} style={{backgroundImage: `url(${imagePath('20200419')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200412')} style={{backgroundImage: `url(${imagePath('20200412')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200410')} style={{backgroundImage: `url(${imagePath('20200410')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200405')} style={{backgroundImage: `url(${imagePath('20200405')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200329')} style={{backgroundImage: `url(${imagePath('20200329')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200322')} style={{backgroundImage: `url(${imagePath('20200322')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200315')} style={{backgroundImage: `url(${imagePath('20200315')})`}}></th>
                                <th onClick={() => this.sermonClickedVideoRef('20200308', 'https://www.youtube.com/embed/eMkhV4urlz4')} style={{backgroundImage: `url(${imagePath('20200308')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200301')} style={{backgroundImage: `url(${imagePath('20200301')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200223')} style={{backgroundImage: `url(${imagePath('20200223')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200216')} style={{backgroundImage: `url(${imagePath('20200216')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200209')} style={{backgroundImage: `url(${imagePath('20200209')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200202')} style={{backgroundImage: `url(${imagePath('20200202')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200126')} style={{backgroundImage: `url(${imagePath('20200126')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200119')} style={{backgroundImage: `url(${imagePath('20200119')})`}}></th>
                                <th onClick={() => this.sermonClicked('20200112')} style={{backgroundImage: `url(${imagePath('20200112')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191231')} style={{backgroundImage: `url(${imagePath('20191231')})`}}></th>
                                <th onClick={() => this.sermonClickedVideoRef('20191229', 'https://www.youtube.com/embed/bEFlRZtesh8')} style={{backgroundImage: `url(${imagePath('20191229')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191215')} style={{backgroundImage: `url(${imagePath('20191215')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191208')} style={{backgroundImage: `url(${imagePath('20191208')})`}}></th>
                                <th onClick={() => this.sermonClickedVideoRef('20191201', 'https://www.youtube.com/embed/HQUM0l8cT4Q')} style={{backgroundImage: `url(${imagePath('20191201')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191117')} style={{backgroundImage: `url(${imagePath('20191117')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191110')} style={{backgroundImage: `url(${imagePath('20191110')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191103')} style={{backgroundImage: `url(${imagePath('20191103')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191027')} style={{backgroundImage: `url(${imagePath('20191027')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191020')} style={{backgroundImage: `url(${imagePath('20191020')})`}}></th>
                                <th onClick={() => this.sermonClicked('20191013')} style={{backgroundImage: `url(${imagePath('20191013')})`}}></th>
                                <th onClick={() => this.sermonClickedVideoRef('20191006', 'https://www.youtube.com/embed/l1WSfsm2KSs')} style={{backgroundImage: `url(${imagePath('20191006')})`}}></th>
                                <th onClick={() => this.sermonClicked('20190929')} style={{backgroundImage: `url(${imagePath('20190929')})`}}></th>
                                <th onClick={() => this.sermonClicked('20190922')} style={{backgroundImage: `url(${imagePath('20190922')})`}}></th>
                                <th onClick={() => this.sermonClicked('20190915')} style={{backgroundImage: `url(${imagePath('20190915')})`}}></th>
                                {/* <th onClick={() => this.sermonClicked('20190908')} style={{backgroundImage: `url(${imagePath('20190908')})`}}></th> */}
                                <th onClick={() => this.sermonClicked('20190901')} style={{backgroundImage: `url(${imagePath('20190901')})`}}></th>                                
                                <th onClick={() => this.sermonClicked('20190818')} style={{backgroundImage: `url(${imagePath('20190818')})`}}></th>                                                                
                                <th onClick={() => this.sermonClicked('20190811')} style={{backgroundImage: `url(${imagePath('20190811')})`}}></th>
                            </tr>
                        </tbody>
                    </table>

                </div>
                {this.state.sermonAudioClicked ? <SermonAudio isVideoSermon={this.state.isVideoSermon} sermonPopupClose={this.sermonPopupClose} clickedDate={this.state.clickedDate} videoAttachmentExist={this.state.videoAttachmentExist} videoAttachmentUrl={this.state.videoAttachmentUrl}/> : null }


                {/*lists of old sermons, TODO: add 'display more' functionality and add categories*/}

            </div>

            
        )
    }
}