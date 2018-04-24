import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Carousel from './components/carousel.jsx';
import unsplashPhotos from './dummy.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: '',
    };
  }

  componentDidMount() {
    const _this = this;
    $.ajax({
      url: '/api/foto',
      method: 'GET',
      success: function(data) {
        _this.setState({
          photos: data,
        });
      },
      error: function(err) {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div className="ppa">
        <div className="banner">
          <h2>SHARE YOUR STYLE #UNIQLYFEWEAR</h2>
          <div className="addphoto">
            <button className="addbtn"> <span className="afoto">ADD A PHOTO</span></button>
            <button className="gallery-view addbtn"> <span className="afoto">VIEW GALLERY</span></button>
          </div>
        </div>
        <div className="carousel-box">
          <Carousel inf={unsplashPhotos}/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('Photos'));
