import { useColorScheme } from 'nativewind';

import { dark, light, type Palette } from './theme';

/**
 * The active palette, as plain values.
 *
 * Use this anywhere colour must be a *value* rather than a class name —
 * above all in SVG drawing code, where colours are props (`stroke`, `fill`)
 * and are often computed rather than written literally.
 *
 *   const c = useColors();
 *   <Path stroke={c.accent} fill={c.accentWash} />
 *
 * For ordinary UI, keep using className: `bg-surface`, `text-textSecondary`.
 */
export function useColors(): Palette {
  const { colorScheme } = useColorScheme();
  return colorScheme === 'light' ? light : dark;
}
