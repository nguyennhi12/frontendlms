import React from 'react'
import Avatar from '../../../../images/avatar.png'
import './Comment.css'
function Comment() {
    return (
        
            <div className="comment-card">
                <div className="comment-card__header">
                    <div className="comment-card__info">
                        <img src={Avatar} className="comment-card__img" />
                        <div className="comment-card__name">
                            <div className="comment-card__name-label">Student</div>
                            <div className="comment-card__name-username">Name</div>
                        </div>

                    </div>

                    <div className="comment-card__date">
                        <div className="comment-card__date-label" >Date</div>
                        <div className="comment-card__date-info">22/8/2021</div>                  
                    </div>

                </div>
                <div className="comment-card__body">
                     <div className="comment-card__body-title">
                            Nice
                     </div>
                     <div className="comment-card__body-content">
                     Lorem ipsum dolor sit amet, est ei idque voluptua copiosae,
                      pro detracto disputando reformidans at, ex vel suas eripuit. Vel alii zril maiorum ex, mea id sale eirmod epicurei. Sit te possit 
                     senserit, eam alia veritus maluisset ei, id cibo vocent ocurreret per. 
                    </div>
                    <span className="comment-card__body-reply" >Reply</span>
                </div>
            </div>
        
    )
}

export default Comment
