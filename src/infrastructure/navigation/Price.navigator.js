import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PriceScreen } from '../../components/PriceScreen';
import { PriceScreen2 } from '../../components/PriceScreen2';
const Tab = createMaterialTopTabNavigator();

export const PriceNavigator=()=> {
  return (
    <Tab.Navigator
    >
      <Tab.Screen name="My Watchlist" component={PriceScreen} />
      <Tab.Screen name="All Coins" component={PriceScreen2} />
    </Tab.Navigator>
  );
}