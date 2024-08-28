import React from 'react';
import {render} from '@testing-library/react-native';
import HelloWorld from '../HelloWorld';
describe('HelloWorld Componenet', () => {
  it('render correctly', () => {
    const {getByText} = render(<HelloWorld />);
    expect(getByText('Hello, World!')).toBeTruthy();
  });
});
