import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TextInputWithLabel from '../TextInputWithLable';

describe('TextInputWithLabel', () => {
  it('renders with label and input', () => {
    const {getByText, getByTestId} = render(<TextInputWithLabel />);
    expect(getByText('Enter Text:')).toBeTruthy();
    expect(getByTestId('text-input')).toBeTruthy();
  });

  it('updates input value on change', () => {
    const {getByTestId} = render(<TextInputWithLabel />);
    fireEvent.changeText(getByTestId('text-input'), 'New Text');
    expect(getByTestId('text-input').props.value).toBe('New Text');
  });
});
