/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {Provider, useSelector} from 'react-redux';
import {logout, selectIsAuthenticated} from './src/redux/authSlice';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import {store} from './src/redux/store';
import {config} from '@gluestack-ui/config';
import HomeScreen from './src/screens/HomeScreen';
import {useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                // eslint-disable-next-line react/no-unstable-nested-components
                headerRight: () => (
                  <Text size={'sm'} onPress={() => dispatch(logout())}>
                    Logout
                  </Text>
                ),
              }}
            />
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
