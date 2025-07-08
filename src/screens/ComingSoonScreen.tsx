import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ComingSoonScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ComingSoonScreen</Text>
    </View>
  );
};

export default ComingSoonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
