import React from 'react';
import Slider from 'react-slick';

const Carousel = (props) => {
  const dummyData = props.inf;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-box">
      <Slider {...settings}>
        {dummyData.map((data, indx) => {
          return (
            <div className="image" key={indx}>
              <h3>
                <img src={`${data.imageUrl}/330x350`} />
              </h3>
              <p className="text">{`@${data.name}`}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
