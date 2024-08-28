// ScrollViewComponent.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import {ScrollViewComp} from '..';

test('renders ScrollView with content', () => {
  const {getByText, getByTestId} = render(<ScrollViewComp />);

  // Check if the ScrollView is rendered
  const scrollView = getByTestId('scrollview');
  expect(scrollView).toBeTruthy();

  // Check if the ScrollView contains the expected content
  expect(getByText('Item 1')).toBeTruthy();
  expect(getByText('Item 6')).toBeTruthy();
});
