export const theme = {
  colors: {
    primary: "#000000",
    onPrimary: "#ffffff",
    brand: "#4a47b2",
    text: "#000000",
    muted: "#898989",
    background: "#ffffff",
    surface: "#f7f7f9",
    border: "#e5e5e5",
    overlay: "rgba(0, 0, 0, 0.5)",
    danger: "#d32f2f",
    success: "#2e7d32",
    warning: "#ed6c02",
    info: "#0288d1",
  },
  fonts: {
    body: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    heading: "'Raleway', system-ui, -apple-system, 'Segoe UI', sans-serif",
  },
  radii: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    pill: "999px",
  },
  layout: {
    headerHeight: "64px",
    toolbarHeight: "52px",
    sidebarWidth: "260px",
    contentMaxWidth: "1200px",
  },
  zIndex: {
    toolbar: 20,
    header: 30,
    overlay: 35,
    sidebar: 40,
    modal: 50,
  },
} as const;

export type AppTheme = typeof theme;
