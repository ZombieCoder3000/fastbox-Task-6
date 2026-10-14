import { BREAKPOINTS } from "@/constants/breakpoints";

export const device = {
  sm: `(min-width: ${BREAKPOINTS.SM}px)`,
  md: `(min-width: ${BREAKPOINTS.MD}px)`,
  lg: `(min-width: ${BREAKPOINTS.LG}px)`,
  xl: `(min-width: ${BREAKPOINTS.XL}px)`,
};

export const deviceMax = {
  sm: `(max-width: ${BREAKPOINTS.SM - 0.02}px)`,
  md: `(max-width: ${BREAKPOINTS.MD - 0.02}px)`,
  lg: `(max-width: ${BREAKPOINTS.LG - 0.02}px)`,
  xl: `(max-width: ${BREAKPOINTS.XL - 0.02}px)`,
};