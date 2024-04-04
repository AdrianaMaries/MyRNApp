import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from '../component/RootNavigator';

export function NavigationProvider() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
