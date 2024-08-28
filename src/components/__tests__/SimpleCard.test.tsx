import React from 'react';
import {render} from '@testing-library/react-native';
import SimpleCard from '../SimpleCard';

describe('SimpleCard', () => {
  test('renders SimpleCard with title and content', () => {
    const {getByText} = render(<SimpleCard />);

    // Check if the title is rendered correctly
    expect(getByText('Card Title')).toBeTruthy();

    // Check if the card content is rendered correctly
    expect(getByText('Card content goes here.')).toBeTruthy();
  });

  test('applies correct styles to the card', () => {
    const {getByText} = render(<SimpleCard />);

    const card = getByText('Card Title').parent; // Access parent View of the title
    const cardStyle = card?.props.style;

    // Check if card styles are applied correctly
    expect(cardStyle).toEqual(
      expect.objectContaining({
        padding: 20,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 10,
      }),
    );
  });

  test('applies correct styles to the title', () => {
    const {getByText} = render(<SimpleCard />);

    const title = getByText('Card Title');
    const titleStyle = title.props.style;

    // Check if title styles are applied correctly
    expect(titleStyle).toEqual(
      expect.objectContaining({
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      }),
    );
  });
});
