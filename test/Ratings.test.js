import React from 'react';
import ReactDOM from 'react-dom';
import Ratings from '../client/src/components/Ratings.jsx';
import renderer from 'react-test-renderer';
import sampleReviews from '../database/data.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ratings reviewData={sampleReviews}/>, div);
});

describe('Ratings', () => {
  test('should render with the correct items', () => {
    const mounted = mount(
      <Ratings
        reviewData={sampleReviews}/>
      );
    expect(mounted).toMatchSnapshot();
  });
});