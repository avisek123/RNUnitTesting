import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SimpleCard: React.FC = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Card Title</Text>
      <Text>Card content goes here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SimpleCard;
