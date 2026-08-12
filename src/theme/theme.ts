/**
 * The single source of colour for the whole app.
 * Both palettes must have identical keys — TypeScript enforces this below.
 * Class names are derived from these keys: `screen` becomes `bg-screen`.
 */
export const dark = {
  // ── Backgrounds, darkest to lightest ──────────────────────────────
  /** The app background. Everything sits on this. */
  screen: '#0C0E0D',
  /** A card or panel lifted off the screen. */
  surface: '#131615',
  /** A panel on top of a panel — e.g. a sheet over a card. */
  surfaceRaised: '#191D1B',
  /** The topmost surface. Inputs, pressed states, quiz options. */
  surfaceHighest: '#212623',

  // ── Separators ────────────────────────────────────────────────────
  /** Default 1px divider. Separation comes from these, never shadows. */
  hairline: '#262C29',
  /** A divider that needs to be noticed — active borders, focus rings. */
  hairlineStrong: '#333B37',

  // ── Text ──────────────────────────────────────────────────────────
  /** Headings and body text. */
  textPrimary: '#E9EEEA',
  /** Supporting text, captions under a graph. */
  textSecondary: '#A7B0AA',
  /** Metadata — the monospace "01 —" labels. */
  textMuted: '#6E7873',
  /** Disabled text, and dimmed formula parts. Legible, barely. */
  textFaint: '#454E49',

  // ── The sage ramp ─────────────────────────────────────────────────
  // Five steps of the accent hue. For graphs needing several distinct
  // lines, or anywhere you need "accent, but a bit quieter".
  sage1: '#CCDCC1',
  sage2: '#B7C6AD',
  sage3: '#A3B09A',
  sage4: '#8E9A87',
  sage5: '#7A8473',

  // ── Accent ────────────────────────────────────────────────────────
  /** The one accent colour. Target ~5% of any screen. */
  accent: '#CCDCC1',
  /** Accent that shouldn't shout — secondary buttons, inactive tabs. */
  accentMuted: '#8E9A87',
  /** Faint accent-tinted background behind highlighted content. */
  accentWash: 'rgba(204,220,193,0.10)',
  /** Same, stronger — selected states. */
  accentWashStrong: 'rgba(204,220,193,0.18)',
  /** Text or icons drawn ON TOP of an accent-filled surface. */
  onAccent: '#0C0E0D',

  // ── Formula decomposition ─────────────────────────────────────────
  // Only ever for colouring parts of a formula. Never decoration.
  // Each has a matching wash for the background behind that part.
  formulaA: '#CCDCC1',
  formulaAWash: 'rgba(204,220,193,0.13)',
  formulaB: '#BFCEDE',
  formulaBWash: 'rgba(191,206,222,0.13)',
  formulaC: '#DEC9BF',
  formulaCWash: 'rgba(222,201,191,0.13)',

  // ── Graphs ────────────────────────────────────────────────────────
  /** Gridlines inside a plot. */
  graphGrid: 'rgba(255,255,255,0.045)',
  /** The plot area itself, slightly off the screen colour. */
  graphSurface: '#101312',

  // ── Status ────────────────────────────────────────────────────────
  /** Correct answer, goal met. */
  success: '#CCDCC1',
  /** Wrong answer, caveat, edge case. Deliberately not red. */
  caution: '#DEC9BF',

  /** Dimmed layer behind a modal or sheet. */
  backdrop: '#080A09',
} as const;

export type ColorName = keyof typeof dark;
export type Palette = Record<ColorName, string>;

export const light: Palette = {
  screen: '#F6F7F5',
  surface: '#FFFFFF',
  surfaceRaised: '#FFFFFF',
  surfaceHighest: '#F0F2EE',

  hairline: '#E3E6E0',
  hairlineStrong: '#D2D7CC',

  textPrimary: '#0F1211',
  textSecondary: '#4B534E',
  textMuted: '#838C86',
  textFaint: '#C3CABF',

  sage1: '#CCDCC1',
  sage2: '#B7C6AD',
  sage3: '#A3B09A',
  sage4: '#8E9A87',
  sage5: '#7A8473',

  accent: '#59674F',
  accentMuted: '#7A8473',
  accentWash: 'rgba(89,103,79,0.09)',
  accentWashStrong: 'rgba(89,103,79,0.16)',
  onAccent: '#FFFFFF',

  formulaA: '#4F6146',
  formulaAWash: 'rgba(79,97,70,0.11)',
  formulaB: '#42566B',
  formulaBWash: 'rgba(66,86,107,0.11)',
  formulaC: '#6E4E42',
  formulaCWash: 'rgba(110,78,66,0.11)',

  graphGrid: 'rgba(15,18,17,0.055)',
  graphSurface: '#FAFBF9',

  // Inherited from dark in the prototype — these are the sage and clay
  // hues on a white background. Revisit when you first see light mode.
  success: '#CCDCC1',
  caution: '#DEC9BF',

  backdrop: '#DCDFD8',
} as const;

/** Corner radii, in points. Deliberately replaces Tailwind's defaults
 *  so the app has exactly one radius scale: `rounded-md` is always 16. */
export const radius = { sm: 10, md: 16, lg: 22, xl: 30 } as const;
