'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, type DefaultTheme } from 'styled-components';
import { makeStore, type AppStore } from '@/redux/store';
import { theme } from '@/style/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <Provider store={storeRef.current}>
      <ThemeProvider theme={theme as unknown as DefaultTheme}>
        {children}
      </ThemeProvider>
    </Provider>
  );
}