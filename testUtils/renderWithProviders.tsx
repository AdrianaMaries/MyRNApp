import {NavigationContainer} from '@react-navigation/native';
import {configureStore} from '@reduxjs/toolkit';
import {render, type RenderOptions} from '@testing-library/react-native';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from '../src/providers/ThemeProvider';
import {movieApi} from '../src/redux/api';
import {rootReducer} from '../src/redux/reducers';

function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(movieApi.middleware),
  });
}

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  component: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({children}: PropsWithChildren) => (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(component, {wrapper: Wrapper, ...renderOptions}),
  };
}
