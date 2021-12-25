import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Homenavigator } from './Home.navigatior';
export const Navigation = () => {

  return (
    <NavigationContainer>
      <Homenavigator />
    </NavigationContainer>
  );
};
