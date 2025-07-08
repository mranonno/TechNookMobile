import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ComingSoonScreen from '../screens/ComingSoonScreen';

export type RootStackParamList = {
  Tabs: undefined;
  ProductDetails: { productId: string };
  ComingSoon: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="ComingSoon" component={ComingSoonScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
