import {fireEvent, render} from '@testing-library/react-native';
import MultiInputField from '../MultiInputField';

describe('Render Multiple Input Field', () => {
  it('TextInput field', () => {
    const {getByTestId, getAllByDisplayValue} = render(<MultiInputField />);
    // Initial the value is empty string
    expect(getAllByDisplayValue('')).toBeTruthy();
    // After update the value
    fireEvent.changeText(getByTestId('input-field'), 'New Text');
    fireEvent.changeText(getByTestId('email-field'), 'New Text');
    // After update the text
    expect(getAllByDisplayValue('New Text')).toBeTruthy();
  });
});
