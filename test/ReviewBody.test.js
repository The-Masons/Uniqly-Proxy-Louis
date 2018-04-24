import React from 'react';
import ReactDOM from 'react-dom';
import ReviewBody from '../client/src/components/ReviewBody.jsx';
import renderer from 'react-test-renderer';
import sampleReviews from '../database/data.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewBody reviewData={sampleReviews.sampleReviews[0]}/>, div);
});

describe('ReviewBody', () => {
  test('should render with the correct items', () => {
    const mounted = mount(
      <ReviewBody
        reviewData={sampleReviews.sampleReviews[0]}/>
      );
    expect(mounted).toMatchSnapshot();
  });
});