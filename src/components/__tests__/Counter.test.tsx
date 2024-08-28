import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Counter from '../Counter';

describe('Counter', () => {
  it('renders with initial count', () => {
    const {getByText} = render(<Counter />);

    // Check if the initial count is displayed correctly
    expect(getByText('Count: 0')).toBeTruthy();
  });

  it('increments count when button is pressed', () => {
    const {getByText, getByTestId} = render(<Counter />);

    // Simulate button press
    fireEvent.press(getByTestId('increment-button'));

    // Check if the count is incremented
    expect(getByText('Count: 1')).toBeTruthy();
  });
});
