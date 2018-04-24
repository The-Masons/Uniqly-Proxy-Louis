import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let ReviewBody = (props) => {
    let date = props.reviewData.date;
    date = date.split('-');
    date = date[1] + ' / ' + date[2].slice(0, 2) + ' / ' + date[0];

    return (
        <div className='review-body'>
            <div className='review-date'>{date}</div>
            <div className='review-title'><b>{props.reviewData.review_title}</b></div>
            <div>{props.reviewData.review_body}</div>
            <div className='review-helpful'><span className='review-helpful-text'>Was this review helpful?</span>
                <span><button className='button-thumbs'><img src="https://i.imgur.com/7RPAVLL.png"></img></button></span> <span><button className='button-thumbs'><img src='https://i.imgur.com/mip0AGG.png'></img></button></span>
            </div>
        </div>
    )
}

export default ReviewBody;