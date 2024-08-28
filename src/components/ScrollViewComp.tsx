import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

const ScrollViewComponent: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} testID="scrollview">
      <View style={styles.content}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
        <Text>Item 5</Text>
        <Text>Item 6</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  content: {
    flexGrow: 1,
  },
});

export default ScrollViewComponent;
