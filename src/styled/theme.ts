export const theme = {
    colors: {
      primary: '#0F172A',
      secondary: '#3B82F6',
      accent: '#10B981',
      background: '#F8FAFC',
      surface: '#FFFFFF',
      text: {
        primary: '#0F172A',
        secondary: '#64748B',
        muted: '#94A3B8',
      },
      border: '#E2E8F0',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
  };
  
  export type Theme = typeof theme;