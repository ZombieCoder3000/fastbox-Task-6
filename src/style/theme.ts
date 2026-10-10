export const theme = {
  colors: {
    primary: "#000000",
    onPrimary: "#ffffff",
    brand: "#4a47b2",
    text: "#000000",
    muted: "#898989",
    navText: "#6b6b99",
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
    xl: "20px",
    pill: "999px",
  },
  gradients: {
    brand: "linear-gradient(90deg, #7c9cf6 0%, #4a47b2 100%)",
    violet: "linear-gradient(135deg, #c7b9f5 0%, #4a47b2 100%)",
    blue: "linear-gradient(135deg, #3b82f6 0%, #4fb6d6 100%)",
    pink: "linear-gradient(135deg, #a24df0 0%, #e94b8f 100%)",
    green: "linear-gradient(135deg, #5ac46a 0%, #3fb08a 100%)",
    orange: "linear-gradient(135deg, #f2b43a 0%, #ea7a2b 100%)",
    red: "linear-gradient(135deg, #ef4444 0%, #e8458f 100%)",
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
