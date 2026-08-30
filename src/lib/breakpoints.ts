export const breakpointValues = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
  "2xl":1536,
} as const;

export type Breakpoint = keyof typeof breakpointValues;

const keys = Object.keys(breakpointValues) as Breakpoint[];

export const breakpoints = {
  up: (key: Breakpoint) => `(min-width: ${breakpointValues[key]}px)`,

  down: (key: Breakpoint) => {
    const idx = keys.indexOf(key);
    const upper = keys[idx + 1];
    return upper
      ? `(max-width: ${breakpointValues[upper] - 0.05}px)`
      : `(min-width: 0px)`;
  },

  between: (start: Breakpoint, end: Breakpoint) =>
    `(min-width: ${breakpointValues[start]}px) and (max-width: ${
      breakpointValues[end] - 0.05
    }px)`,

  only: (key: Breakpoint) => {
    const idx = keys.indexOf(key);
    const next = keys[idx + 1];
    return next
      ? breakpoints.between(key, next)
      : breakpoints.up(key);
  },
};