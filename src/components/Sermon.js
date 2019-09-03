import React, { Component } from 'react';
import '../styles/sermon.css';
import SermonAudio from './SermonPopup';


export default class Sermon extends Component {
    state = {
        sermonAudioClicked: false,
        clickedDate: ''
    }

    sermonClicked = (date) => {
        this.setState({sermonAudioClicked: !this.state.sermonAudioClicked});
        this.setState({clickedDate: date})
    }

    popupClose = () => {
        this.setState({sermonAudioClicked: !this.state.sermonAudioClicked});
    }

    render() {
        const imagePath = (date) => require('../images/sermonImages/' + date + '.png');
        return(
            <div>
                <div className="sermon-banner">

                </div>
                <div className="sermon-container">
                    <table className="sermon-lists">
                        <tbody>
                            <tr>
                                <th onClick={() => this.sermonClicked('20190901')} style={{backgroundImage: `url(${imagePath('20190901')})`}}></th>
                                <th onClick={() => this.sermonClicked('20190825')} style={{backgroundImage: `url(${imagePath('20190825')})`}}></th>
                                <th onClick={() => this.sermonClicked('20190818')} style={{backgroundImage: `url(${imagePath('20190818')})`}}></th>
                                
                                <th onClick={() => this.sermonClicked('20190811')} style={{backgroundImage: `url(${imagePath('20190811')})`}}></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {this.state.sermonAudioClicked ? <SermonAudio popupClose={this.popupClose} clickedDate={this.state.clickedDate} /> : null }             
            </div>
        )
    }
}