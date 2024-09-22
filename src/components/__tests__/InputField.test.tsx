// InputField.test.js
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InputField from '../InputField';

test('renders InputField and updates value', () => {
  const {getByDisplayValue, getByTestId} = render(<InputField />);

  // Initially the input field should be empty
  expect(getByDisplayValue('')).toBeTruthy();

  // Simulate entering text
  fireEvent.changeText(getByTestId('single-input-field'), 'New text');

  // After entering text, the input field value should be updated
  expect(getByDisplayValue('New text')).toBeTruthy();
});
