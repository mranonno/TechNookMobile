import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ThemeToggleButton from '../components/ThemeToggleButton';
import { useThemeContext } from '../theme/ThemeProvider';

const HomeScreen = () => {
  const { colors } = useThemeContext();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>🏠 Home Screen</Text>
      {/* <Button
        title="Go to Product Details"
        onPress={() =>
          navigation.navigate('ProductDetails', { productId: '123' })
        }
      /> */}
      <ThemeToggleButton />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
