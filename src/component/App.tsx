import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootNavigator} from './RootNavigator';

export function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
