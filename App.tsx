import React from 'react';
import {NavigationProvider} from './src/providers/NavigationProvider';
import {ReduxProvider} from './src/providers/ReduxProvider';
import {ThemeProvider} from './src/providers/ThemeProvider';

export default function AppWrapper() {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <NavigationProvider />
      </ThemeProvider>
    </ReduxProvider>
  );
}
