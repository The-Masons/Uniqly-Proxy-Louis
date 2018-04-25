import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Review from './Review.jsx';
import OverallRatings from './OverallRatings.jsx';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [],
            product_id: null,
        }
    }

    componentDidMount() {
        const context = this;
        let url = window.location.href.split('/').pop();
        (url.length > 0) ? null : url = '0';
        axios.get('/reviews/' + url)
            .then(function (response) {
                context.setState({
                    productData: response.data,
                    product_id: url
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className='reviews'>
                <div className='overall-ratings'>
                    <OverallRatings reviewData={this.state.productData} />
                </div>
                {this.state.productData.map((item, index) =>
                    <div key={index}>
                        <Review reviewData={this.state.productData[index]} />
                    </div>)
                }
            </div>
        );
    }
}

export default ReviewList;
