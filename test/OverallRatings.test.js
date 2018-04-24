import React from 'react';
import ReactDOM from 'react-dom';
import OverallRatings from '../client/src/components/OverallRatings.jsx';
import renderer from 'react-test-renderer';
import sampleReviews from '../database/data.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OverallRatings reviewData={sampleReviews}/>, div);
});

describe('OverallRatings', () => {
  test('should render with the correct items', () => {
    const mounted = mount(
      <OverallRatings
        reviewData={sampleReviews}/>
      );
    expect(mounted).toMatchSnapshot();
  });
});