import React, {useState} from 'react';
import SermonLogo from '../images/sermonImages/sermonAudioLogo.png';

const SermonAudio = ({clickedDate, videoAttachmentExist, videoAttachmentUrl, onClose}) => {
    const [showVideoAttachment, setShowVideoAttachment] = useState(false);
    var dateArray = [];
    var date = clickedDate;
    var year = date.substr(0, 4);        
    var month = date[4] === '0' ? date[5] : date[4] + date[5];
    var day = date[6] === '0' ? date[7] : date[6] + date[7];
    dateArray.push(year, month, day);
    return(
        <>
            <div className="sermon-popup">     
            <div className="sermon-popup-container">
                <button onClick={() => onClose()} type="button" className="sermon-close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>            
                {showVideoAttachment && 
                    (<iframe width="100%" height="300" src={videoAttachmentUrl} frameborder="0" 
                        allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen" 
                        msallowfullscreen="msallowfullscreen" 
                        oallowfullscreen="oallowfullscreen" 
                        webkitallowfullscreen="webkitallowfullscreen"></iframe>)
                }
                <div style={{display: 'flex', width: '100%'}}>                                    
                    <img src={SermonLogo} />
                    <p>{dateArray[1]}월 {dateArray[2]}일 말씀({dateArray[0]})<br/> 
                    {parseInt(date) == 20200410 ? 
                    (
                        <a className="sermonVideoRefButton" href="https://j-grace.s3-us-west-2.amazonaws.com/20200410guideline.pdf" target="_blank">안내 순서 보기</a>
                    ) : null}
                    {videoAttachmentExist && (<button className="sermonVideoRefButton" onClick={() => setShowVideoAttachment(true)}>첨부 동영상 보기</button>)}
                    </p>
                </div>

                <audio style={{outline: 'none'}} controls>
                    <source src={`https://j-grace.s3-us-west-2.amazonaws.com/${date}.mp3`} type="audio/mp3" />
                </audio>
                </div>                
            </div>
        </>
    )
}

export default SermonAudio;