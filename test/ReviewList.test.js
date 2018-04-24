import React from 'react';
import ReactDOM from 'react-dom';
import ReviewList from '../client/src/components/ReviewList.jsx';
import renderer from 'react-test-renderer';
import sampleReviews from '../database/data.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewList reviewData={sampleReviews}/>, div);
});

describe('ReviewList', () => {
  test('should render with the correct items', () => {
    const mounted = mount(
      <ReviewList
        reviewData={sampleReviews}/>
      );
    expect(mounted).toMatchSnapshot();
  });
});

