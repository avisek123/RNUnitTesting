import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputField: React.FC = () => {
  const [val, setVal] = React.useState('');
  return (
    <TextInput
      testID="input-field"
      style={styles.input}
      value={val}
      onChangeText={str => {
        setVal(str);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default InputField;
