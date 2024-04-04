import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectIsAuthenticated} from '../redux/authSlice';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import MovieDetails from '../screens/MovieDetails';
import {Text} from '@gluestack-ui/themed';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Details: {
    itemId: number;
  };
  Login: undefined;
  Home: undefined;
};

export function RootNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => (
                <Text size="sm" color="blue" onPress={() => dispatch(logout())}>
                  Logout
                </Text>
              ),
            }}
          />
          <Stack.Screen
            name="Details"
            component={MovieDetails}
            options={{
              headerBackTitle: 'Home',
            }}
          />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
}
