import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <Button
        title="Increment"
        onPress={() => setCount(count + 1)}
        testID="increment-button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  countText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Counter;
