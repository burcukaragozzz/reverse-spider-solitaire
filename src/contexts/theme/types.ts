import { DefaultTheme } from 'styled-components/macro';

export type ExtendedTheme = DefaultTheme & { name: string };

export type ThemeState = {
    theme: ExtendedTheme;
    toggle: VoidFunction;
};
