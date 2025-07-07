import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailsScreen = () => {
  //   const { productId } = route.params;

  return (
    <View style={styles.container}>
      <Text>🛍️ Product ID: </Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
