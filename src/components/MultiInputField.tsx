import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const MultiInputField: React.FC = () => {
  const [val, setVal] = React.useState('');
  const [val1, setVal1] = React.useState('');
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 50,
      }}>
      <TextInput
        testID="input-field"
        placeholder="Enter Name"
        style={styles.input}
        value={val}
        onChangeText={str => {
          setVal(str);
        }}
      />
      <View
        style={{
          height: 20,
        }}
      />
      <TextInput
        testID="email-field"
        placeholder="Enter Email"
        style={styles.input}
        value={val1}
        onChangeText={str => {
          setVal1(str);
        }}
      />
    </View>
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

export default MultiInputField;
