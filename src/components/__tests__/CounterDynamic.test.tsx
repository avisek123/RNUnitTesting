import {fireEvent, render} from '@testing-library/react-native';
import CounterOne from '../CounterOne';

describe('Counter', () => {
  it('increments the count when the button is pressed', () => {
    // Render the component
    const {getByTestId} = render(<CounterOne />);

    // Retrieve the initial count value directly from the data-count prop
    const initialCount = getByTestId('count-text').props['data-count'];

    // Verify the initial count value
    expect(initialCount).toBe(0); // Assuming the initial count is 0

    // Simulate pressing the button to increment the count
    fireEvent.press(getByTestId('increment-button'));

    // Retrieve the updated count value from the data-count prop
    const updatedCount = getByTestId('count-text').props['data-count'];

    // Verify that the updated count is 1 more than the initial count
    expect(updatedCount).toBe(initialCount + 1);
  });
});
