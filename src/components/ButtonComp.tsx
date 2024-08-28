import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native';

const ButtonComponent: React.FC = () => {
  const onAlert = () => {
    Alert.alert('Hello');
  };
  return (
    <View style={styles.container}>
      <Button title={'Click Me'} onPress={onAlert} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default ButtonComponent;
