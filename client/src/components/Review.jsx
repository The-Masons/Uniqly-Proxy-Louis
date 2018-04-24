import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import UserInfo from './UserInfo.jsx';
import ReviewBody from './ReviewBody.jsx';
import Ratings from './Ratings.jsx';

let Review = (props) => {
    return (
        <div className='review-component'>
            <UserInfo reviewData={props.reviewData} /><ReviewBody reviewData={props.reviewData} /><Ratings reviewData={props.reviewData} />
        </div>
    )
}

export default Review;