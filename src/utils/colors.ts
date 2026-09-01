
export interface ThemeColors {
  // Page
  background: string;
  foreground: string;

  // Surfaces
  surface: string;
  surfaceMuted: string;
  surfaceElevated: string;

  // Borders
  border: string;
  borderMuted: string;

  // Text
  text: string;
  textMuted: string;
  textSubtle: string;
  textInverse: string;

  // Interactive
  primary: string;
  primaryForeground: string;
  primaryHover: string;

  // States
  success: string;
  successForeground: string;
  disabled: string;

  // Shadows
  shadow: string;
  shadowMuted: string;

  // Selection
  selection: string;
  selectionForeground: string;
}
// Paper Theme
export const paperTheme: ThemeColors = {
  background: "#F7F6F2",
  foreground: "#171717",

  surface: "#F0EEE6",
  surfaceMuted: "#EFECE6",
  surfaceElevated: "#FFFFFF",

  border: "#171717",
  borderMuted: "rgba(23, 23, 23, 0.20)",

  text: "#171717",
  textMuted: "#737373",
  textSubtle: "#A3A3A3",
  textInverse: "#FFFFFF",

  primary: "#171717",
  primaryForeground: "#FFFFFF",
  primaryHover: "#262626",

  success: "#34D399",
  successForeground: "#FFFFFF",
  disabled: "rgba(23, 23, 23, 0.40)",

  shadow: "#171717",
  shadowMuted: "#C8C3B9",

  selection: "#171717",
  selectionForeground: "#FFFFFF",
};
// Midnight Theme
export const midnightTheme: ThemeColors = {
  background: "#0F1115",
  foreground: "#F5F5F5",

  surface: "#181B21",
  surfaceMuted: "#14171C",
  surfaceElevated: "#20242B",

  border: "#F5F5F5",
  borderMuted: "rgba(245, 245, 245, 0.20)",

  text: "#F5F5F5",
  textMuted: "#A1A1AA",
  textSubtle: "#71717A",
  textInverse: "#0F1115",

  primary: "#F5F5F5",
  primaryForeground: "#0F1115",
  primaryHover: "#E4E4E7",

  success: "#34D399",
  successForeground: "#052E1A",
  disabled: "rgba(245, 245, 245, 0.35)",

  shadow: "#000000",
  shadowMuted: "#3F3F46",

  selection: "#F5F5F5",
  selectionForeground: "#0F1115",
};
// Warm Theme
export const warmTheme: ThemeColors = {
  background: "#FFF8EE",
  foreground: "#2A2118",

  surface: "#F7ECDD",
  surfaceMuted: "#F2E1CE",
  surfaceElevated: "#FFFCF7",

  border: "#2A2118",
  borderMuted: "rgba(42, 33, 24, 0.20)",

  text: "#2A2118",
  textMuted: "#796B5D",
  textSubtle: "#A89A8A",
  textInverse: "#FFF8EE",

  primary: "#2A2118",
  primaryForeground: "#FFF8EE",
  primaryHover: "#46382B",

  success: "#3F7D58",
  successForeground: "#FFFFFF",
  disabled: "rgba(42, 33, 24, 0.35)",

  shadow: "#2A2118",
  shadowMuted: "#CDBCA7",

  selection: "#2A2118",
  selectionForeground: "#FFF8EE",
};
//BluePrint Theme
export const blueprintTheme: ThemeColors = {
  background: "#EEF4F8",
  foreground: "#102A43",

  surface: "#DCEAF3",
  surfaceMuted: "#E5EFF5",
  surfaceElevated: "#FFFFFF",

  border: "#102A43",
  borderMuted: "rgba(16, 42, 67, 0.20)",

  text: "#102A43",
  textMuted: "#627D98",
  textSubtle: "#829AB1",
  textInverse: "#FFFFFF",

  primary: "#102A43",
  primaryForeground: "#FFFFFF",
  primaryHover: "#243B53",

  success: "#2F855A",
  successForeground: "#FFFFFF",
  disabled: "rgba(16, 42, 67, 0.35)",

  shadow: "#102A43",
  shadowMuted: "#9FB3C8",

  selection: "#102A43",
  selectionForeground: "#FFFFFF",
};

export const themes = {
  paper: paperTheme,
  midnight: midnightTheme,
  warm: warmTheme,
  blueprint: blueprintTheme,
} satisfies Record<string, ThemeColors>;

export type ThemeName = keyof typeof themes;
