import {fireEvent, render} from '@testing-library/react-native';
import Login from '../Login';
import React from 'react';

describe('Login Page Test Case', () => {
  it('should render login elements and handle input and button interactions', () => {
    // Render the Login component with the mock function passed as a prop
    const {getByTestId, getAllByDisplayValue, getByText} = render(<Login />);

    expect(getByTestId('login-text')).toBeTruthy();

    // Initially the input field should be empty`
    expect(getAllByDisplayValue('')).toBeTruthy();

    // update the name field
    fireEvent.changeText(getByTestId('login-name-input'), 'John Doe');
    expect(getByTestId('login-name-input').props.value).toBe('John Doe');

    // update the email filed
    fireEvent.changeText(getByTestId('login-email-input'), 'john@example.com');
    expect(getByTestId('login-email-input').props.value).toBe(
      'john@example.com',
    );

    // button login
    const button = getByText('Log in');
    expect(button).toBeTruthy();

    //  Press the button
    fireEvent.press(button);

    // Check if the inputs are cleared
    expect(getByTestId('login-name-input').props.value).toBe('');
    expect(getByTestId('login-email-input').props.value).toBe('');
  });
});
