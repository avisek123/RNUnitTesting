import React from 'react';
import {render} from '@testing-library/react-native';
import {TextComp} from '..';

test('renders welcome message', () => {
  const {getByText} = render(<TextComp />);
  expect(getByText('Welcome to the app!')).toBeTruthy();
});
