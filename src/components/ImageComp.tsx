import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const ImageComp: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://img.freepik.com/premium-vector/woman-paying-money-online-transfer-digital-payment-e-wallet-mobile-transaction-concept-illustration_270158-827.jpg?w=1380',
        }}
        style={styles.image}
        testID="example-image"
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
  image: {
    width: 500,
    height: 500,
  },
});

export default ImageComp;
