'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from '@/components/feedback';

const defaultTheme = {
  colors: {
    primary: '#2563eb',
    secondary: '#475569',
    accent: '#0ea5e9',
    background: '#f8fafc',
    surface: '#ffffff',
    text: {
      primary: '#0f172a',
      secondary: '#475569',
      muted: '#94a3b8',
    },
    border: '#e2e8f0',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        {children}
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
}