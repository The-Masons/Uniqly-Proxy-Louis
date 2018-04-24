import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starRating: 'https://i.imgur.com/8uXuBst.png',
            lengthRating: 'https://i.imgur.com/ddEqRD2.png',
            qualityRating: 'https://i.imgur.com/ddEqRD2.png',
        }
        this.setRatings = this.setRatings.bind(this);
    }

    componentWillMount() {
        this.setRatings();
    }

    setRatings() {
        let ratingUrls = [
            'https://i.imgur.com/IaFTATj.png',
            'https://i.imgur.com/iZMWhUN.png',
            'https://i.imgur.com/lns6OZ4.png',
            'https://i.imgur.com/TOTBzNY.png',
            'https://i.imgur.com/8uXuBst.png']

        let sliderUrls = [
            'https://i.imgur.com/HOnAtsW.png',
            'https://i.imgur.com/tySGtVQ.png',
            'https://i.imgur.com/P8ZeyGW.png',
            'https://i.imgur.com/0OjX4aO.png',
            'https://i.imgur.com/ddEqRD2.png'];

        this.setState({
            starRating: ratingUrls[this.props.reviewData.rating - 1],
            lengthRating: sliderUrls[this.props.reviewData.product_length - 1],
            qualityRating: sliderUrls[this.props.reviewData.product_quality - 1],
        });
    }

    render() {
        return (
            <div className='review-ratings'>
                <div className='rating-title'>Rating</div>
                <div className='rating-meter'><img src={this.state.starRating}></img></div>
                <div><span>LENGTH </span>&nbsp;<span className='length-meter'><img src={this.state.lengthRating}></img></span></div>
                <div className='slider-description'><span className='slider-description-left'>Very Short</span><span className='slider-description-right-length'>Very Long</span></div>
                <div><span>QUALITY</span>&nbsp;<span className='quality-meter'><img src={this.state.qualityRating}></img></span></div>
                <div className='slider-description'><span className='slider-description-left'>Poor</span><span className='slider-description-right-quality'>Perfect</span></div>
            </div>
        );
    }
}

export default Ratings;
