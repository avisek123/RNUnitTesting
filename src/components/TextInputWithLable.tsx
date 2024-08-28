import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextInputWithLabel: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Text:</Text>
      <TextInput style={styles.input} testID="text-input" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextInputWithLabel;
