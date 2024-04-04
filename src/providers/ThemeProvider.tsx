import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import React, {PropsWithChildren} from 'react';

export function ThemeProvider({children}: PropsWithChildren) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
}
