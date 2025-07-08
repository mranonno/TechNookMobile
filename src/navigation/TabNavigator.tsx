import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import TabBarIcon from '../components/TabBarIcon';
import { useThemeContext } from '../theme/ThemeProvider';
import ProfileScreen from '../screens/ProfileScreen';

type TabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const getScreenOptions = (
  isDarkMode: boolean,
  colors: {
    background: string;
    primary: string;
    text: string;
    card: string;
    border: string;
    pureWhite: string;
    pureBlack: string;
    tabBackground: string;
  },
): ((props: {
  route: RouteProp<TabParamList, keyof TabParamList>;
}) => BottomTabNavigationOptions) => {
  const activeColor = isDarkMode ? colors.card : colors.primary;
  const inactiveColor = isDarkMode ? '#c7cbcc' : '#646464';
  return ({ route }) => ({
    // headerShown: false,
    tabBarActiveTintColor: activeColor,
    tabBarInactiveTintColor: inactiveColor,
    tabBarStyle: {
      backgroundColor: colors.tabBackground,
      borderTopWidth: 0,
      height: 60,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '600',
    },
    tabBarIcon: ({ focused, color, size }) => (
      <TabBarIcon
        focused={focused}
        color={color}
        size={size}
        routeName={route.name}
      />
    ),
  });
};

const TabNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { colors } = useThemeContext();

  return (
    <Tab.Navigator screenOptions={getScreenOptions(isDarkMode, colors)}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          title: 'My Favorites',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '600' },
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          title: 'My Cart',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '600' },
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          title: 'My Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: '600' },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
