import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Greeting from '../Greetings';

describe('Greetings Component', () => {
  it('render correctly', () => {
    const {getByText} = render(<Greeting />);
    expect(getByText('Hello, User!')).toBeTruthy();
  });
  it('Change the message when the button is pressed', () => {
    const {getByText} = render(<Greeting />);
    const button = getByText('Change Message');
    fireEvent.press(button);
    expect(getByText('Welcome to React Native!')).toBeTruthy();
  });
  it('Reset the button', () => {
    const {getByText} = render(<Greeting />);
    const button = getByText('Reset');
    fireEvent.press(button);
    expect(getByText('Hello, User!')).toBeTruthy();
  });
});
