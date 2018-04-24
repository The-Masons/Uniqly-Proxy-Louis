import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from '../client/src/components/UserInfo.jsx';
import renderer from 'react-test-renderer';
import sampleReviews from '../database/data.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfo reviewData={sampleReviews}/>, div);
});

describe('UserInfo', () => {
  test('should render with the correct items', () => {
    const mounted = mount(
      <UserInfo
        reviewData={sampleReviews}/>
      );
    expect(mounted).toMatchSnapshot();
  });
});