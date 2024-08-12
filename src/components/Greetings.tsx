import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Greeting: React.FC = () => {
  const [message, setMessage] = useState('Hello, User!');

  const changeMessage = () => {
    setMessage('Welcome to React Native!');
  };

  const resetMessage = () => {
    setMessage('Hello, User!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Change Message" onPress={changeMessage} />
      <Button title="Reset" onPress={resetMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
});

export default Greeting;
