import localFont from "next/font/local";

// Single switch point for the brand font.
// To try a new font: overwrite `src/app/fonts/brand-font.ttf` with the new
// file (keep the same filename) and restart `next dev`. No other code changes needed.
export const brandFont = localFont({
  src: "./fonts/brand-font.ttf",
  variable: "--brand-font",
  display: "swap",
});
