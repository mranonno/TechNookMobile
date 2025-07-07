// TabBarIcon.tsx
import { TabBarIconProps } from '../types/global';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({ focused, color, size, routeName }: TabBarIconProps) => {
  let iconName = '';

  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'Cart') {
    iconName = focused ? 'cart' : 'cart-outline';
  } else if (routeName === 'Favorites') {
    iconName = focused ? 'heart' : 'heart-outline';
  } else if (routeName === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  } else {
    iconName = 'ellipse-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};

export default TabBarIcon;
