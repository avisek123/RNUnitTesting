// ImageComponent.test.js
import React from 'react';
import {render} from '@testing-library/react-native';
import ImageComp from '../ImageComp';

test('renders ImageComponent with image', () => {
  const {getByTestId} = render(<ImageComp />);

  // Check if the image is rendered
  const image = getByTestId('example-image');
  expect(image).toBeTruthy();

  // Check if the image has the correct source URI
  expect(image.props.source.uri).toBe(
    'https://img.freepik.com/premium-vector/woman-paying-money-online-transfer-digital-payment-e-wallet-mobile-transaction-concept-illustration_270158-827.jpg?w=1380',
  );
});
