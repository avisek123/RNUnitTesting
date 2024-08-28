import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ButtonComponent from '../ButtonComp'; // Make sure the import path is correct
import {Alert} from 'react-native';

// Mock the Alert module
jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));
describe('ButtonComponent', () => {
  it('renders correctly', () => {
    // Render the component
    const {getByText} = render(<ButtonComponent />);

    // Check if the button with the correct title is rendered
    const button = getByText('Click Me');
    expect(button).toBeTruthy();

    // Simulate button press
    fireEvent.press(button);

    // Verify Alert.alert was called with the correct parameters
    expect(Alert.alert).toHaveBeenCalledWith('Hello');
  });
});
