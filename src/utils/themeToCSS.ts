import type { ThemeColors } from "./colors";

export function themeToCssVariables(theme: ThemeColors) {
  return {
    "--color-background": theme.background,
    "--color-foreground": theme.foreground,

    "--color-surface": theme.surface,
    "--color-surface-muted": theme.surfaceMuted,
    "--color-surface-elevated": theme.surfaceElevated,

    "--color-border": theme.border,
    "--color-border-muted": theme.borderMuted,

    "--color-text": theme.text,
    "--color-text-muted": theme.textMuted,
    "--color-text-subtle": theme.textSubtle,
    "--color-text-inverse": theme.textInverse,

    "--color-primary": theme.primary,
    "--color-primary-foreground": theme.primaryForeground,
    "--color-primary-hover": theme.primaryHover,

    "--color-success": theme.success,
    "--color-success-foreground": theme.successForeground,
    "--color-disabled": theme.disabled,

    "--color-shadow": theme.shadow,
    "--color-shadow-muted": theme.shadowMuted,

    "--color-selection": theme.selection,
    "--color-selection-foreground": theme.selectionForeground,
  } as React.CSSProperties;
}
