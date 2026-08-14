// @ts-expect-error nativewind/preset ships no type declarations
import nativewindPreset from 'nativewind/preset';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import { dark, light, radius, type Palette } from './src/theme/theme';

const toVars = (p: Palette) =>
  Object.fromEntries(Object.entries(p).map(([k, v]) => [`--color-${k}`, v]));

const colors = Object.fromEntries(Object.keys(dark).map((k) => [k, `var(--color-${k})`]));

const fontFamily = { mono: ['Menlo'], math: ['Iowan Old Style'] };

const borderRadius = Object.fromEntries(Object.entries(radius).map(([k, v]) => [k, `${v}px`]));

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [nativewindPreset],
  theme: { extend: { colors, borderRadius, fontFamily } },
  plugins: [
    plugin(({ addBase }) => addBase({ ':root': toVars(light), '.dark:root': toVars(dark) })),
  ],
} satisfies Config;
