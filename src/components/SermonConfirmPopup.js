import React from 'react';
import '../styles/sermonConfirmPopup.css';

const SermonConfirmPopup = ({onConfirmVideo, onConfirmAudio, onClose}) => {
    return(
        <>
            <div className="sermon-popup">                
                <div style={{display: 'flex'}}>
                    <button className="confirm-button" onClick={() => onConfirmVideo()}>
                        예배영상
                    </button>
                    <button className="confirm-button" onClick={() => onConfirmAudio()}>
                        오디오말씀
                    </button>
                    <button onClick={() => onClose()} type="button" className="sermon-video-close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default SermonConfirmPopup;