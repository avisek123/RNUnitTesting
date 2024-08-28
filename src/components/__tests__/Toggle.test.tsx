import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Toggle from '../Toggle';

describe('Toggle', () => {
  test('renders Toggle with initial state', () => {
    const {getByText, getByTestId} = render(<Toggle />);

    // Check if the initial label text is 'Switch is OFF'
    expect(getByText('Switch is OFF')).toBeTruthy();

    // Check if the switch is initially off
    expect(getByTestId('toggle-switch').props.value).toBe(false);
  });

  test('updates state and label text when switch is toggled', () => {
    const {getByText, getByTestId} = render(<Toggle />);

    // Toggle the switch
    fireEvent.press(getByTestId('toggle-switch'), {target: {value: true}});

    // Check if the label text is updated to 'Switch is ON'
    expect(getByText('Switch is ON')).toBeTruthy();

    // Check if the switch is on
    expect(getByTestId('toggle-switch').props.value).toBe(true);
  });

  test('toggles state and label text correctly on multiple changes', () => {
    const {getByText, getByTestId} = render(<Toggle />);

    // Toggle the switch to ON
    fireEvent.press(getByTestId('toggle-switch'), {target: {value: true}});
    expect(getByText('Switch is ON')).toBeTruthy();
    expect(getByTestId('toggle-switch').props.value).toBe(true);

    // Toggle the switch back to OFF
    fireEvent.press(getByTestId('toggle-switch'), {target: {value: false}});
    expect(getByText('Switch is OFF')).toBeTruthy();
    expect(getByTestId('toggle-switch').props.value).toBe(false);
  });
});
