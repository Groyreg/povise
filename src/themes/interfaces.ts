import { ReactNode } from 'react';

export interface IColors {
  accent: string;
  background: string;
  dynamic: string;
  primary: string;
  secondary: string;
  text: string;
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
  media: IMedia;
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

export interface IStyles {
  theme: ITheme;
}

export interface IMedia {
  desktop: string;
  onlyMobile: string;
  onlyTablet: string;
  tablet: string;
}
