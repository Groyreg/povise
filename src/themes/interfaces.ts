import { ReactNode } from 'react';

export interface IColors {
  accent: string;
  background: string;
  dynamic: string;
  primary: string;
  secondary: string;
}

export interface ISizes {
  l: string;
  m: string;
  s: string;
  xl: string;
  xxl: string;
}

export interface ITheme {
  colors: IColors;
  sizes: ISizes;
}

export interface IThemes {
  dark: ITheme;
  light: ITheme;
}

export interface IProvider {
  children: ReactNode;
}

export interface IThemeToggle {
  toggle: () => void;
}
