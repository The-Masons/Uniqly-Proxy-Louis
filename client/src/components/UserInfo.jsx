import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

var UserInfo = (props)=>{
    return (
            <div className='review-userinfo'>
                <div className='userinfo-nickname'>{props.reviewData.nickname}</div>
                <div><b>From: </b>{props.reviewData.from}</div>
                <div><b>Size Purchased: </b>{props.reviewData.size_purchased}</div>
                <div><b>Height: </b>{props.reviewData.height}</div>
                <div><b>Age: </b>{props.reviewData.age}</div>
                <div><b>Gender: </b>{props.reviewData.gender}</div>
                <div><b>Chest size: </b>{props.reviewData.chest_size}"</div>
                <div><b>Waist size: </b>{props.reviewData.waist_size}"</div>
                <div><b>Hips size: </b>{props.reviewData.hips_size}"</div>
            </div>
    )
}

export default UserInfo;
