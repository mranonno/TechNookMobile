import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import useThemeContext from '../theme/useTheme';

const ThemeToggleButton = () => {
  const { theme, toggleTheme, colors } = useThemeContext();

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
      onPress={toggleTheme}
    >
      <Text style={[styles.text, { color: colors.text }]}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ThemeToggleButton;
